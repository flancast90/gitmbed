# gitmbed
> Safely embed external content in your GitHub README with simple HTML, and allow others to view it!

<br />

### Install
Coming Soon:<a href="" align="center"><img src="get_on_cws.png" height="75" align="center"/></a>

_or, install using the Load Unpacked feature in Chrome/Edge_ as explained [here](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)

<br />

### Getting Started!
<br>
<b>Viewing gitmbed Content</b>
<br /><br />

1. After installing, the gitmbed browser extension will begin searching for embbeded content. When it finds this, it will automatically render it.
<br />

**Making gitmbed Content**
<br />

<details><summary>Auto-Generation (most users)</summary>
  <ol>
    <li>Navigate to https://gitmbed.finnsoftware.net#setup.</li>
    <li>Fill-out the form with the correct data: url, width, and height</li>
    <li>Your code will show up in the textarea below the form inputs. Copy this, and paste anywhere. Anyone with the gitmbed extension will be able to view your embedded content!</li>
    <li>That's it! Congrats on the setup! 🎉</li>
  </ol>
</details>
<br />
<details><summary>Manual Setup</summary>
  <ol>
    <li>The bare-minimum for gitmbed content is that it contains the page contains an image element (<code><img></code>) with the HTML <code>alt</code> attribute. Inside this <code>alt</code>, you must append the arguments <code>embed src</code>, <code>embed width</code>, <code>embed height</code></li>
    <li>As stated on the <a href="https://gitmbed.finnsoftware.net">gitmbed homepage</a>, the <code>embed_width</code> and <code>embed_height</code> arguments can take either a numerical px, percent, em, or rem value. It should also be noted that the <code>embed_url</code> must be a full url, including <code>https://</code>, <code>http://</code>, or <code>file://</code>
  </ol>
</details>

<br />

### Example

The code for the below example looks like the following (will show-up as "Download Extension to View", unless extension is downloaded, where it will be an embed to my latest sheet music 🎵):
```html
<img alt="gitmbed=https://musescore.com/user/35848526/scores/6907224/embed,100%,500" width="100%" src="https://gitmbed.finnsoftware.net/assets/img/button_gitmbed.png"/>
```

<img width="100%" alt="gitmbed=https://musescore.com/user/35848526/scores/6907224/embed,100%,500" src="https://gitmbed.finnsoftware.net/assets/img/button_gitmbed.png"/>

<br />

### License

Gitmbed, it's content, and it's ideas are copyrighted under the Apache 2.0 License. Details on this license, your rights, and the rights of the copyright holder can be found [here](https://www.apache.org/licenses/LICENSE-2.0)

The GitHub buttons library used in the extension pop-up is licensed under the BSD-2.0 Clause

```
Copyright 2021 なつき

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

And the GitHub [Primer.css](https://www.primer.style/css) is under MIT License.

```
The MIT License (MIT)

Copyright (c) 2021 GitHub Inc.

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
```
