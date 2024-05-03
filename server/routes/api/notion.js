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

export default router;

//https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca5233dc-dd01-4ed3-a416-4bfb6078ac69%2FLogo.png?table=block&id=83fca179-f831-4fd7-84e5-41e3368df6a5&cache=v2
//https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca5233dc-dd01-4ed3-a416-4bfb6078ac69%2FLogo.png?table=block&amp;id=83fca179-f831-4fd7-84e5-41e3368df6a5&amp;cache=v2