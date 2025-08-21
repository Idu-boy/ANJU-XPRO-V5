//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9rOHBETVhzZ0NnVXhoWC8vbVV5UDBVT01TbEVYMnNxNnp1UmhhUGtsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVdaYXhobGtETCtTb0ZoVm0xdXpERllKREZyMnNuMEVtNm95YmZkV1RBWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRFBmenFLdVQrczNqRzVkTHE1SVdiLzhZaUlYU2xjQmZYTWgyYnNLLzFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQ1FSZUg3R2hOR3JCd0t2L1R1STEvUFZlMkk0K2R6cWZUNlFuUGNmS3djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKQXFJMUdxTXEvRjNWeUM2bVVndmtDZVB2MTRqL2JxRHBFYmFMZjR4bDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRzWWlBbTBwTCtvYjJxaEVJQnJEU1lwdmRXbjFtRE1MYlg3NHdYYjhtQ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BnRVFFS1NYRUgrTzBaeWp0blJNWnBMajVNUFJabk9GOElDaUJqMndVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEduRVY5K2YybmxwZGd6U2NWbmZHeWdxbXczN2JqNHAxaVIvdkZJVkJCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE3WmZtd2VzQ3oxV2lLREFJdEl5WXM3TS9XT3Q0cjdBR1EwQXZrYmNYVlFqWUd5czhVeEJKRjMzbkpwZ3pYMGhHQUxCMDNQS1JkUjBTRjAyZ0hhd2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImxhUlhSUjdydXkwS29oNm5RenpmYk40L3U5dFhFRFZ0VklFZ2VCZTYwU1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdKMktUTUVEUWFhVG81bDZQaE83MlEiLCJwaG9uZUlkIjoiMzg4MzM0MTAtYWY1NC00NzBiLTgyMTktNTQwZmIxYmUzYjRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzbGJSOTdlKzVkbUFuOHV4aTRpQ1J1eXdHVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdW82Q3NISE14R2JOT2pWL0RMS0xmRXh1Y2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0sxQ0MxWDYiLCJtZSI6eyJpZCI6Ijk0Nzg5Njk5MDQzOjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzc1MzM2MDI1MzMzOTA6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tLOGxzMEVFTnFibk1VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjU3cWpvcFk2eDZRZXU3bGZYbWJwcUcxVThMeGo3QXY3eXhZcnptRU45WDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNTclVjL2lucHF4Mzl0TDFqNzZtdjQ0SEhFa1hNOExMb3l1QThjOE5oM0twQmloK3FMUm5qeGVsanhIeEF1ODVwZnFJMVpzUDdPbmFxODdqRFVycUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrZ1Y3MXByeVc3U3pCbUZMRUl1aHRWWlVhS0k3TDI5MTVlbUI4VUxybTJLWnAzOW1WOXF4d2RZTzlBcFZaSDl4cUYxbS9WZ0labUFwWUROTjNESXFpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg5Njk5MDQzOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWU2bzZLV09zZWtIcnU1WDE1bTZhaHRWUEM4WSt3TCs4c1dLODVoRGZWLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1Nzc4NTM1LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94789699043",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
