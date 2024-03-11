
const axios = require('axios');
const sha1 = require('sha1');


// Replace with your BBB server URL and secret
const BBB_URL = ' https://<domain>/bigbluebutton';
const BBB_SECRET = 'bigbluebutton secret';

// Utility function to generate call URL
function generateBBBCall(apiName, query) {
    const checksum = sha1(apiName + query + BBB_SECRET);
    return `${BBB_URL}/api/${apiName}?${query}&checksum=${checksum}`;
}

const meetingID = 'webinar-Demo-123'
const name = "Webinar Demo";
const duration = 720;

// Endpoint to create a meeting
const createMeeting = async () => {

    const query = `name=${encodeURIComponent(name)}&meetingID=${meetingID}&duration=${duration}`;
    const url = generateBBBCall('create', query);

    try {
        const response = await axios.get(url);
        console.log("Meeting Created Sucessfully: ", '\n', response.data);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

// Endpoint to join a meeting
const JoinModerator = () => {
    const fullName = "Moderator";
    const role = "MODERATOR";

    const query = `fullName=${encodeURIComponent(fullName)}&meetingID=${meetingID}&role=${role}`;
    const url = generateBBBCall('join', query);

    // For join, we redirect the user to the BBB join URL
    console.log("Moderator Join URL: ", url, '\n');
};


// Endpoint to join a meeting
const JoinViewer = () => {
    const fullName = "Viewer";
    const role = "VIEWER";
    const guest = true

    const query = `fullName=${encodeURIComponent(fullName)}&meetingID=${meetingID}&role=${role}&guest=${guest}`;
    const url = generateBBBCall('join', query);

    // For join, we redirect the user to the BBB join URL
    console.log("Viewer Join URL: ", url, '\n');
};

createMeeting();
JoinModerator();
JoinViewer();