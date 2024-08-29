import { nanoid } from 'nanoid';
import Url from '../models/urlModel.js';


export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = nanoid(6);

  try {
    
    const url = new Url({ longUrl, shortCode });
    await url.save();

    
    res.json({ shortUrl: `http://localhost:3000/api/${shortCode}` });
  } catch (error) {
    res.status(500).json({ message: 'Error shortening the URL', error });
  }
};


export const redirectUrl = async (req, res) => {
  const { code } = req.params;

  try {
    const url = await Url.findOne({ shortCode: code });

    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error redirecting', error });
  }
};
