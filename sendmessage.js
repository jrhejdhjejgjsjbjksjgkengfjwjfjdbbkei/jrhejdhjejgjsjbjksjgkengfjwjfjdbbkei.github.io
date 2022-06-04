var mylist = ['[Voice Rolled Another User](<https://www.clivent-gay.cf>)', '[Voice Flopped Another User](<https://www.clivent-gay.cf>)', '[Voice Cracked Another User](<https://www.clivent-gay.cf>)']
function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/982780151962161192/h1lrpNhYqbEx-1NfE3iqZ6DnMY5GY1iLLFa2kN6kJGRZMvGsTFy-4XWZiutQAYMMMv4S");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "clivent-gay.cf",
        avatar_url: "https://cdn.discordapp.com/avatars/767819210662740059/584e4ff2546731439e4ce4a0dd0b999e.webp?size=128",
        content: mylist[Math.floor(Math.random() * mylist.length)],
    }

    request.send(JSON.stringify(params));
    }
sendMessage()
