import githubBlack from '../assets/GitHub_Invertocat_Black.svg';
import githubWhite from '../assets/GitHub_Invertocat_White.svg';
import linkedinBlack from '../assets/InBug-Black.png';
import linkedinWhite from '../assets/InBug-White.png';
import emailBlack from '../assets/Email_Black.svg';
import emailWhite from '../assets/Email_White.svg';

export const siteIcons = {
  email: [emailBlack, emailWhite],
  github: [githubBlack, githubWhite],
  linkedin: [linkedinBlack, linkedinWhite],
} as const;
