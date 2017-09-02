/*
BLUR-WALLPAPER.
Project repo: https://github.com/ppizarror/blur-wallpaper

MIT License
Copyright (c) 2017 Pablo Pizarro @ppizarror.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Console messages
var consolemsglist = ['<b>Blur-Wallpaper v{0}</b>'.format(themeversion)];
var maxmsg = 15;

function consolemsg(msg) {
    // Create a message on the console
    try {

        // Add msg to list
        consolemsglist.push('<b>[{0}]</b> {1}'.format(new Date().format('m/d h:i:s'), msg));
        if (consolemsglist.length > maxmsg) {
            consolemsglist.splice(1, 1);
        }

        // Concatenate all messages and write to console
        msgc = '';
        for (i = 0; i < consolemsglist.length; i++) {
            msgc += consolemsglist[i] + '<br>';
        }
        $('#console #consoletext').html(msgc);
    } catch (e) {} finally {}
}

function setConsoleStatus(status) {
    // Enable/Disable console
    if (status) {
        $('#console').css('display', 'block');
    } else {
        $('#console').css('display', 'none');
    }
}

function setAuthorStatus(status) {
    // Enable/Disable author under console
    if (status) {
        $('#author').css('display', 'block');
    } else {
        $('#author').css('display', 'none');
    }
}

function parseException(e) {
    // Set exception message
    return "<span class='msgexception'>EXCEPTION!</span> {0}".format(e);
}
