import express from 'express'; //web server
const app = express(); // express object
import cors from 'cors'; // cors policy between client and backend
import mariadb from 'mariadb'; // mariadb
import pg from 'pg';
import notion from './routes/api/notion.js';
import dotenv from 'dotenv'; // environment variable
import path from 'path';
import cookieParser from "cookie-parser"; // cookie-parser 모듈 import
import moment from 'moment';
dotenv.config(); // environment variable
const { DEV_ADDR, PRD_ADDR, SERVER_PORT, NODE_ENV, MARIA_HOST, MARIA_PORT, MARIA_DB, MARIA_USER, MARIA_PW, PG_HOST, PG_PORT, PG_DB, PG_SCHEMA, PG_USER, PG_PW } = process.env;
//환경마다 다른거쓸수 있도록 조절하자.
const whitelist = [`${PRD_ADDR}`,  `${DEV_ADDR}`];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      // origin이 undefined일 경우 처리

      callback(null, true);
      return;
    }

    if (whitelist.some((allowedOrigin) => origin.match(allowedOrigin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: false })); // bodyparser
app.use(express.json()); // bodyparser
app.use(cookieParser());
// Mariadb 연결 설정
const mariadbPool = mariadb.createPool({
  host: MARIA_HOST,
  port: MARIA_PORT,
  user: MARIA_USER,
  password: MARIA_PW,
  database: MARIA_DB,
});
// PostgreSQL 연결 설정
const { Pool } = pg;
const postgresPool = new Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DB,
  password: PG_PW,
  port: PG_PORT,
});


app.get('/api', async (req, res) => {
  let mariaConn;
  let pgConn;
  try {
    mariaConn = await mariadbPool.getConnection();
    mariaConn.release();
    pgConn = await postgresPool.connect();
    pgConn.release();

    const mariaTest = await mariaConn.query('SELECT * FROM geo_test');
    const pgTest = await pgConn.query(`SELECT * FROM ${PG_SCHEMA}.test`);

    if (mariaTest.length >= 0 && pgTest.rows.length >= 0) {
    } else {
      throw new Error('디비 접속에 실패하였습니다.');
    }

    res.status(200).send('홈 페이지입니다.');
  } catch (error) {
    console.error('데이터베이스 연결 오류:', error.message);
    res.status(500).send('서버 내부 오류');
  }
});

app.get('/api/visitCheck', async (req, res) => { 

  let mariaConn;
  const cookies = req.cookies
  const aYear = 365*24*60*60*1000;
  const aDay = 24*60*60*1000;
  
  let result = [{
    visited: false,
    visitedIn24: false,
  }]

  try {
    mariaConn = await mariadbPool.getConnection();
    mariaConn.release();
    if (mariaConn) {
      console.log("connected to mariaDB")
    } else {
      throw new Error('디비 접속에 실패하였습니다.');
    }
  } catch (error) {
    console.error(`Maria DB error occurred: ${error}`)
    throw new Error('Failed to connect to the database');
  }

  const countVisitor = async () => { 
    try {
      let query = `SELECT * 
                     FROM GEO_VISITOR
                     WHERE 1 = 1
                       AND DATE(COUNT_DATE) = CURDATE();`;
      const rowCheck = await mariaConn.query(query);
      const date = moment();
      const currentDate = date.format('YYYY-MM-DD HH:mm:ss').toString();
      if (rowCheck && rowCheck.length < 1) { // 해당일 첫 방문자
        query = `INSERT INTO GEO_VISITOR
                            ( VISITOR
                            , COUNT_DATE
                            , CREATED_AT 
                            ) VALUES
                            ( 1
                            , CURDATE() 
                            , ?);`;
        const values=[currentDate]
        const insCnt = await mariaConn.query(query, values);
        
      } else { 
        query = `UPDATE GEO_VISITOR
                          SET VISITOR = VISITOR + 1
                            , UPDATED_AT = ?
                        WHERE 1 = 1
                          AND COUNT_DATE = CURDATE()`
        const values = [currentDate];
        const updCnt = await mariaConn.query(query, values);
      }
    } catch (e) {
      console.error(`MariaDB error occurred: ${e}`);
      throw new Error('DB error');
    }
  }

  if (cookies && cookies['geo_visited']) {

    if (cookies['geo_visited_in_24']) {
        result[0].visited = true   
        result[0].visitedIn24 = true   
      } else { 
      result[0].visited = true   
      result[0].visitedIn24 = false   
      res.cookie('geo_visited_in_24', { maxAge: aDay,samesite:true })
      countVisitor();
    }
  } else { 
    res.cookie('geo_visited', { maxAge: aYear, samesite: true });
    res.cookie('geo_visited_in_24', { maxAge: aDay, samesite: true });
    countVisitor();
    //db 오늘방문자 ++
    
  }
  res.status(200).send(result)
})

app.get('/api/cookieCheck', async (req, res) => {
  const cookies = req.cookies;
  let result = [{visited: false}];
  if (cookies && cookies['geo_visited']) result[0].visited = true;   
  res.status(200).send(result);
})

app.use('/api/notion', notion);
//A
if (process.env.NODE_ENV === 'prd') {
  // Set static folder
  app.use(express.static('client/dist'));

  // index.html for all page routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'dist', 'index.html'));
  });
}


app
  .listen(SERVER_PORT, () => {
    console.log('This app is running at http://localhost:' + SERVER_PORT);
  })
  .on('error', (err) => {
    console.error('Something went wrong' + err.message);
  });
