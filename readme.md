
# BigBlueButton Node.js Integration

This project provides a simple Node.js application to create and join meetings on BigBlueButton (BBB). It generates URLs for moderators and viewers to join the meetings and integrates seamlessly with Calendly by allowing you to paste these URLs into your event configurations.

## Prerequisites

- Node.js installed on your machine.
- Access to a BigBlueButton server.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the cloned repository's folder and run the following command to install the required dependencies:

```bash
npm install
```

## Configuration

Before running the server, you need to set up your BigBlueButton server URL and credentials:

1. Open `server.js` in your preferred text editor.
2. Replace the placeholder values for `BBB_URL` and `BBB_SECRET` with your actual BigBlueButton server URL and secret.

```javascript
const BBB_URL = 'https://<your-domain>/bigbluebutton';
const BBB_SECRET = '<your-bigbluebutton-secret>';
```

3. (Optional) Adjust the meeting parameters as needed, such as `meetingID`, `name`, and `duration`.

## Running the Server

Execute the following command in the terminal:

```bash
node server.js
```

This will create a meeting and print the Moderator and Viewer join URLs in the console.

## Using the URLs

- Copy the Moderator and Viewer join URLs.
- Paste them into your respective Calendly buttons or any other scheduling tool you use.

## Important Notes

- The meeting duration is scheduled for 12 hours. The moderator should not end the meeting prematurely, as this will close the meeting. If the meeting is accidentally ended, you will need to recreate the meeting and update the links in Calendly.
- The moderator can leave the meeting without ending it to ensure the meeting remains active for its full duration.

