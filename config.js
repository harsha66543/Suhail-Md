const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761299352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_16_56_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDUzLFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhBa3U5bzZ2eUI2eTEybTVIdzJWeElMSnQ4TForMzFraHdITlovOXM3SVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNPVWdCdFN0UXFDTGtiQk9fQVVxVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTI0YjM1MTQtY2VhMS00MTcwLWI2NGMtZDlhNTJjODU3NzUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDEwNixcbiAgICAgIDk1LFxuICAgICAgMTg4LFxuICAgICAgMTYsXG4gICAgICAyMjgsXG4gICAgICAyMDcsXG4gICAgICAzNSxcbiAgICAgIDE2MyxcbiAgICAgIDEsXG4gICAgICAxMzcsXG4gICAgICAxMDUsXG4gICAgICA3NyxcbiAgICAgIDkwLFxuICAgICAgMTM2LFxuICAgICAgNDYsXG4gICAgICAxODgsXG4gICAgICAxMDIsXG4gICAgICA4OSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICA5OSxcbiAgICAgIDExMixcbiAgICAgIDg3LFxuICAgICAgMTAyLFxuICAgICAgMzQsXG4gICAgICAyMDIsXG4gICAgICAyMTIsXG4gICAgICAxMzAsXG4gICAgICAxMDgsXG4gICAgICAxNDgsXG4gICAgICAyMDAsXG4gICAgICAyMjgsXG4gICAgICAxOTIsXG4gICAgICAxMCxcbiAgICAgIDE1NyxcbiAgICAgIDIwOCxcbiAgICAgIDExNCxcbiAgICAgIDExMCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdXV1FKOEJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTI5OTM1Mjo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzMTUzOTkyOTA5MDQwOjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHYWp0MEVFTFg0eHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1pHdGpSZUdES1dZMjNPb0xkMWJZc3hiUEJCQkRrT3IrU3VFZWlWZHdDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPUUswTmNMQlZKMThwdDhpZGJEbzc4V1k2Sncvc0N2ZVNaMksxandLU3p2bG00UDNheE01b1N2RFpKWnZkL3h6TU1XZnRKaXJjcFBOT0VzdFVTUXRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRUXhEQ3I1ZEV2R25TNWtMZ0s2em5haDRqNTNGSkc3VGVqenlwNVpzajB5eDBxeHNKbEVXSk1sbnk3ZFJyOTZNTDZESmZUL01rQ0ZhaUFpVk5KYnFqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MTI5OTM1Mjo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcyOTc4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkRpdWNiV3REYUoxS2p2V0VWNHZoTjJoaEg4bmFsWWdsVWt2b2U3RVRDbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MDA5Njc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
