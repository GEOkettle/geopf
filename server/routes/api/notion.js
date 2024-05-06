import express from 'express';
const router = express.Router();
import { NotionAPI } from 'notion-client';

router.get('/mainArticle', async (req, res) => {
  // const notion = new NotionAPI({
  //   activeUser: '1f9f6762-ff1f-4a48-a4e9-5aae363e99d7',
  //   authToken: 'v02%3Auser_token_or_cookies%3Ay8gjKe-QA-X5BLICHss81rznkgpQBrOCZUJqi1nHHaHYtuuhJxjNx1O1evzs9_5hxCJGPY5Jd-gYgIlXUaliOzj-2nnV9fyqJTBxNGwV6PywYZInyUttn1GRVPfLkJGrQC9k',
  // });
  const notion = new NotionAPI();
  //https://furtive-lemming-021.notion.site/GEO-s-portfolio-83fca179f8314fd784e541e3368df6a5?pvs=4
  const recordMap = await notion.getPage('83fca179f8314fd784e541e3368df6a5');
  return res.status(200).json({ recordMap, status: 'success' });
});

router.get('/pjList', async (req, res) => {
  const notion = new NotionAPI();
  //https://furtive-lemming-021.notion.site/2528e3d7315245f799f82e26c552ee71?v=34e80522ec5e48a8b3ead60ddf96def1&pvs=4
  const recordMap = await notion.getPage('2528e3d7315245f799f82e26c552ee71');
  return res.status(200).json({ recordMap, status: 'success' });
});

router.post('/getPost', async (req, res) => {

  const notion = new NotionAPI();
  const postId = req.body.postId;
  const recordMap = await notion.getPage(postId);
  return res.json({ recordMap, status: 'success' });
});


export default router;
