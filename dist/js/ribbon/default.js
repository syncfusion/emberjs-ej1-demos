import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
          expandPinSettings:{  toolTip: "Collapse the Ribbon" },
          collapsePinSettings:{toolTip: "Pin the Ribbon" },
          allowResizing : true,
          applicationTab : {
              type: ej.Ribbon.ApplicationTabType.Menu,
               menuItemID: "ribbonmenu", 
               menuSettings: { openOnClick: false }
          },
          tabs: [{
              id: "home", text: "HOME", groups: [{
                  text: "New", alignType: ej.Ribbon.AlignType.Rows, content: [{
                      groups: [{
                          id: "new",
                          text: "New",
                          toolTip: "New",
                          isMobileOnly: true,
                          buttonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-new",
                          }
                      }
                      ],
                      defaults: {
                          type: ej.Ribbon.Type.Button,
                          width: 60,
                          height: 70
                      }
                  }]
              },
              {
                  text: "Clipboard", alignType: ej.Ribbon.AlignType.Columns, content: [{
                      groups: [{
                          id: "paste",
                          text: "paste",
                          toolTip: "Paste",
                          splitButtonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              prefixIcon: "e-icon e-ribbon e-ribbonpaste",
                              targetID: "pasteSplit",
                              buttonMode: "dropdown",
                              arrowPosition: ej.ArrowPosition.Bottom,
                          }
                      }
                      ],
                      defaults: {
                          type: ej.Ribbon.Type.SplitButton,
                          width: 50,
                          height: 70
                      }
                  },
                  {
                      groups: [{
                          id: "cut",
                          text: "Cut",
                          toolTip: "Cut",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              prefixIcon: "e-icon e-ribbon e-ribboncut",
                          }
                      },
                      {
                          id: "copy",
                          text: "Copy",
                          toolTip: "Copy",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              prefixIcon: "e-icon e-ribbon e-ribboncopy",
                          }
                      },
                      {
                          id: "clear",
                          text: "Clear",
                          toolTip: "Clear All",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              prefixIcon: "e-icon e-ribbon clearAll",
                          }
                      }],
                      defaults: {
                          type: ej.Ribbon.Type.Button,
                          width: 60,
                          isBig: false
                      }
                  }]
              },
              {
                  text: "Font", alignType: "rows", content: [{
                      groups: [{
                          id: "fontfamily",
                          toolTip: "Font",
                          dropdownSettings: {
                              dataSource: ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"],
                              text: "Segoe UI",
                              width: 150
                          }
                      },
                      {
                          id: "fontsize",
                          toolTip: "FontSize",
                          dropdownSettings: {
                              dataSource: ["1pt", "2pt", "3pt", "4pt", "5pt"],
                              text: "1pt",
                              width: 65
                          }
                      }],
                      defaults: {
                          type: ej.Ribbon.Type.DropDownList,
                          height: 28
                      }
                  },
                  {
                      groups: [{
                          id: "bold",
                          toolTip: "Bold",
                          type: ej.Ribbon.Type.ToggleButton,
                          toggleButtonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              defaultText: "Bold",
                              activeText: "Bold",
                              defaultPrefixIcon: "e-icon e-ribbon bold",
                              activePrefixIcon: "e-icon e-ribbon bold",
                          }
                      },
                      {
                          id: "italic",
                          toolTip: "Italic",
                          type: ej.Ribbon.Type.ToggleButton,
                          toggleButtonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              defaultText: "Italic",
                              activeText: "Italic",
                              defaultPrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                              activePrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                          }
                      },
                      {
                          id: "underline",
                          text: "Underline",
                          toolTip: "Underline",
                          type: ej.Ribbon.Type.ToggleButton,
                          toggleButtonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              defaultText: "Underline",
                              activeText: "Underline",
                              defaultPrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                              activePrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                          }
                      },
                      {
                          id: "strikethrough",
                          text: "strikethrough",
                          toolTip: "Strikethrough",
                          type: ej.Ribbon.Type.ToggleButton,
                          toggleButtonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              defaultText: "Strikethrough",
                              activeText: "Strikethrough",
                              defaultPrefixIcon: "e-icon e-ribbon strikethrough",
                              activePrefixIcon: "e-icon e-ribbon strikethrough",
                          }
                      },
                      {
                          id: "superscript",
                          text: "superscript",
                          toolTip: "Superscript",
                          buttonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              prefixIcon: "e-icon e-ribbon e-superscripticon",
                          }
                      },
                      {
                          id: "subscript",
                          text: "subscript",
                          toolTip: "Subscript",
                          enableSeparator: true,
                          buttonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              prefixIcon: "e-icon e-ribbon e-subscripticon",
                          }
                      },

                      {
                          id: "fontcolor",
                          text: "Font Color",
                          toolTip: "Font Color",
                          type: ej.Ribbon.type.custom,
                          contentID: "fontcolor"
                      },
                      {
                          id: "fillcolor",
                          text: "Fill Color",
                          toolTip: "Fill Color",
                          type: ej.Ribbon.type.custom,
                          contentID: "fillcolor"
                      }
                      ],
                      defaults: {
                          isBig: false,
                      }
                  }]
              },
              {
                  text: "Alignment", alignType: ej.Ribbon.AlignType.Rows, content: [
                      {
                          groups: [{
                              id: "bullet",
                              text: "Bullet Format",
                              toolTip: "Bullets",
                              buttonSettings: {
                                  contentType: ej.ContentType.ImageOnly,
                                  prefixIcon: "e-icon e-ribbon e-bullet",
                              }
                          },
                                {
                                    id: "number",
                                    text: "Number Format",
                                    toolTip: "Numbering",
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-numbericon",
                                    }
                                },
                                {
                                    id: "textindent",
                                    text: "Indent",
                                    toolTip: "Text Indent",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-indent",
                                    }
                                },
                                {
                                    id: "textoudent",
                                    text: "Outdent",
                                    toolTip: "Text Outdent",
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-outdent",
                                    }
                                },
                                {
                                    id: "sortascending",
                                    text: "Sort",
                                    toolTip: "Sort",
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-sort",
                                    }
                                },
                                {
                                    id: "border",
                                    text: "Border",
                                    toolTip: "Border",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-border",
                                    }
                                }],
                                defaults: {
                                    type: ej.Ribbon.Type.Button,
                                    isBig: false
                                }
                            },
                            {
                                groups: [{
                                    id: "alignleft",
                                    text: "JustifyLeft",
                                    toolTip: "Align Left",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignleft",
                                    }
                                },
                                {
                                    id: "aligncenter",
                                    text: "JustifyCenter",
                                    toolTip: "Align Center",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon aligncenter",
                                    }
                                },
                                {
                                    id: "alignright",
                                    text: "JustifyRight",
                                    toolTip: "Align Right",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignright",
                                    }
                                },
                                {
                                    id: "justify",
                                    text: "JustifyFull",
                                    toolTip: "Justify",
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon justify",
                                    }
                                },
                                {
                                    id: "uppercase",
                                    text: "Upper Case",
                                    toolTip: "Upper Case",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-uppercase",
                                    }
                                },
                                {
                                    id: "lowercase",
                                    text: "Lower Case",
                                    toolTip: "Lower Case",
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-lowercase",
                                    }
                                }],
                                defaults: {
                                    type: ej.Ribbon.Type.Button,
                                    isBig: false
                                }
                            }]
                    },
                    {
                        text: "Actions", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "undo",
                                text: "Undo",
                                toolTip: "Undo",
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-undo",
                                }
                            },
                            {
                                id: "redo",
                                text: "Redo",
                                toolTip: "Redo",
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-redo",
                                }
                            }
                            ],
                            defaults: {
                                type: ej.Ribbon.Type.Button,
                                width: 40,
                                height: 70
                            }
                        }]
                    },
                    {
                        text: "View", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "zoomin",
                                text: "Zoom In",
                                toolTip: "Zoom In",
                                width: 58,
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-zoomin",
                                }
                            },
                            {
                                id: "zoomout",
                                text: "Zoom Out",
                                toolTip: "Zoom Out",
                                width: 70,
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-zoomout",
                                }
                            },
                            {
                                id: "fullscreen",
                                text: "Full Screen",
                                toolTip: "Full Screen",
                                width: 73,
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-fullscreen",
                                }
                            }
                            ],
                            defaults: {
                                type: ej.Ribbon.Type.Button,
                                height: 70
                            }
                        }]
                    }]
          },
          {
              id: "insert", text: "INSERT", groups: [{
                  text: "Tables", alignType: ej.Ribbon.AlignType.Columns, content: [{
                      groups: [{
                          id: "tables",
                          text: "Tables",
                          isMobileOnly: true,
                          toolTip: "Tables",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-table",
                          }
                      }
                      ],
                      defaults: {
                          type: ej.Ribbon.Type.Button,
                          width: 50,
                          height: 70
                      }
                  }]
              },
              {
                  text: "Illustrations", alignType: ej.Ribbon.AlignType.Rows, content: [{
                      groups: [{
                          id: "pictures",
                          text: "Pictures",
                          toolTip: "Pictures",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-picture",
                          }
                      },
                      {
                          id: "videos",
                          text: "Videos",
                          toolTip: "Videos",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-video",
                          }
                      },
                      {
                          id: "shapes",
                          text: "Shapes",
                          toolTip: "Shapes",
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-shape",
                          }
                      },
                                {
                                    id: "charts",
                                    text: "Charts",
                                    toolTip: "Charts",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-chart",
                                    }
                                }
                            ],
                            defaults: {
                                type: ej.Ribbon.Type.Button,
                                width: 56,
                                height: 70
                            }
                        }]
                        },
                        {
                            text: "Comments", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "comments",
                                    text: "Comments",
                                    toolTip: "Comments",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-comment",
                                    }
                                }
                                ],
                                defaults: {
                                    type: ej.Ribbon.Type.Button,
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Text", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "text",
                                    text: "Text",
                                    toolTip: "Text",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-text",
                                        width: 50,
                                    }
                                },
                                {
                                    id: "datetime",
                                    text: "Date Time",
                                    toolTip: "DateTime",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-datetimenew",
                                    }
                                }
                                ],
                                defaults: {
                                    type: ej.Ribbon.Type.Button,
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Hyperlink", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "hyperlink",
                                    text: "Hyperlink",
                                    toolTip: "Hyperlink",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-hyperlink",
                                    }
                                }
                                ],
                                defaults: {
                                    type: ej.Ribbon.Type.Button,
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Equation", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "equation",
                                text: "Equation",
                                toolTip: "Equation",
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-equation",
                                }
                            }
                            ],
                            defaults: {
                                type: ej.Ribbon.Type.Button,
                                width: 60,
                                height: 70
                            }
                        }]
					},
					{
                        text: "Print Layout", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "printlayout",
                                text: "Print Layout",
                                toolTip: "Print Layout",
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-printlayout",
                                }
                            }
                            ],
                            defaults: {
                                type: ej.Ribbon.Type.Button,
                                width: 80,
                                height: 70
                            }
                        }]
					},
					{
                        text: "Save", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "print",
                                text: "Print",
                                toolTip: "Print",
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-print",
                                }
                            },
                            {
                                    id: "save",
                                    text: "Save",
                                    toolTip: "Save",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-save",
                                    }
								}], 
                                defaults: 
                                {
                                    type: ej.Ribbon.Type.Button,
                                    width: 50,
                                    height: 70
                                }
                            }]
					}
                    ]
                }],
            onCreate: function(){
                Ember.$("#fontcolor").ejColorPicker({ value: "#FFFF00", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fontcoloricon" });
                Ember.$("#fillcolor").ejColorPicker({ value: "#FF0000", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fillcoloricon" });
            }
         }
    }
});
