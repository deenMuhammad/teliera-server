const enroll = (obj, { id }) => {
  return {
      "_id": id,
      "title": "Create SNS using Node.js",
      "shortDesc": "Create it",
      "longDesc": "Beautyful SNS",
      "showcase": [
          {
              "_id": "5c05df0d8e35d70013d6c18e",
              "title": "paypal",
              "image": "image1...."
          },
          {
              "_id": "5c05df0d8e35d70013d6c18d",
              "title": "ebay",
              "image": "image2...."
          }
      ],
      "chapter": [
          {
              "section": [
                  {
                      "_id": "5c05df0d8e35d70013d6c196",
                      "title": "Section 1",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  },
                  {
                      "_id": "5c05df0d8e35d70013d6c195",
                      "title": "Section 2",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  },
                  {
                      "_id": "5c05df0d8e35d70013d6c194",
                      "title": "Section 3",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  }
              ],
              "_id": "5c05df0d8e35d70013d6c193",
              "title": "Chapter 1"
          },
          {
              "section": [
                  {
                      "_id": "5c05df0d8e35d70013d6c192",
                      "title": "Section 1",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  },
                  {
                      "_id": "5c05df0d8e35d70013d6c191",
                      "title": "Section 2",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  },
                  {
                      "_id": "5c05df0d8e35d70013d6c190",
                      "title": "Section 3",
                      "content": {
                          "_id": "5c05daf49ca2250013b2be7c",
                          "title": "Hello, Node.js",
                          "image": "node",
                          "exec": null,
                          "start": "node index.js",
                          "test": null,
                          "docs": [
                              {
                                  "_id": "5c05daf49ca2250013b2be7d",
                                  "title": "Node.js 가 뭔가요?",
                                  "article": "# Node.js 가 뭔가요?\n\n> Node.js 가 어떻게 시작되었고, 어떤 장점이 있을까요? 이번 섹션에서 Node.js 에 대해 알아보고, 첫번째 Hello, world! 프로그램을 만들게 될 것입니다!\n\n![노드이미지](img/nodejs.png)\n\nNode.js 는 Chrome V8 자바스크립트 엔진을 기반으로한 자바스크립트 런타임이며, 비동기 이벤트 처리와 네트워크 스트리밍 처리에 적합합니다.\n\nChrome 에 내장되어있는 V8 자바스크립트 엔진이 오픈소스로 공개되면서 이 엔진을 활용해 서버사이드 런타임을 만들 수 있게 되었습니다. 2009년 처음 Node.js 가 등장하고 재단까지 설립되어 기술 개발이 활발히 이루어지고 있습니다.\n\nHTML, CSS 와 함께 작동하던 자바스크립트 언어를 이용해 서버를 개발할 수 있게 되었습니다. 또한, 최신 ECMAScript 규격을 지원하면서 일반 웹브라우저에서 사용하던 문법외에 실용적인 문법들이 몇가지 더 추가되었습니다!\n\n\n## Node.js 를 어떻게 시작할까요?\n\nNode.js 로 어플리케이션을 만드는 것은 매우 간단합니다! 웹브라우저의 Javascript 문법을 그대로 사용할 수 있습니다. 웹브라우저에서 Javascript 디버깅 창에 내용을 출력하는 `console.log()` 를 Node.js 에 그대로 입력하면, 그 내용이 터미널에 출력될 것입니다.\n\n```js\nconsole.log('Hello, Node.js');\n// \"Hello, Node.js\"\n```\n\n## Node.js 설치\n\n자신의 컴퓨터에 Node.js 를 직접 설치하고 싶으시다면, [`Node.js 공식사이트`](https://nodejs.org/) 를 확인하세요. 윈도우, 맥, 리눅스에 대한 설치 정보를 제공하고 있습니다.\n\n## 도전 과제\n우측에 보여지는 개발 환경에는 Node.js 가 이미 설치되어 있습니다. `console.log()` 함수를 이용해 `index.js` 파일을 수정해서 실행 버튼(`node index.js` 를 터미널에서 실행하는 것과 같습니다)을 눌렀을 떄 `Bye-Ahssa` 가 출력되도록 변경해보세요!\n"
                              }
                          ],
                          "workgit": "5c05daf35bd4e600126eaf0b",
                          "testgit": "5c05daf45bd4e600126eaf0c",
                          "createAt": 1543887604142,
                          "__v": 0
                      }
                  }
              ],
              "_id": "5c05df0d8e35d70013d6c18f",
              "title": "Chapter 2"
          }
      ],
      "__v": 0
  }
}

module.exports = { enroll }