import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
          expandPinSettings:{  
              customToolTip:{
                  title: "Collapse the Ribbon",
                    content: "<h6>Click the icon to collapse the Ribbon.</h6>"
				} 
          },
          collapsePinSettings:{
              customToolTip:{
                  title: "Pin the Ribbon",
                    content: "<h6>Keep it open while you work</h6>"
                }
           },
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
                          customToolTip: {
                            title: "Paste",
                            content: "<h6>Paste the content.<br/><br/>Add content on the Clipboard to your document.</h6>"
                          },
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
                          customToolTip: {
                            title: "Cut",
                            content: "<h6>Cut the content.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              prefixIcon: "e-icon e-ribbon e-ribboncut",
                          }
                      },
                      {
                          id: "copy",
                          text: "Copy",
                          customToolTip: {
                            title: "Copy",
                            content: "<h6>Copy the content.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              prefixIcon: "e-icon e-ribbon e-ribboncopy",
                          }
                      },
                      {
                          id: "clear",
                          text: "Clear",
                          customToolTip: {
                            title: "Clear",
                            content: "<h6>Clear the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "FontFamily",
                            content: "<h6>Change font family of the content.</h6>"
                          },
                          dropdownSettings: {
                              dataSource: ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"],
                              text: "Segoe UI",
                              width: 150
                          }
                      },
                      {
                          id: "fontsize",
                          customToolTip: {
                            title: "FontSize",
                            content: "<h6>Change font size of the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "Bold",
                            content: "<h6>Bold the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "Italic",
                            content: "<h6>Italic the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "Underline",
                            content: "<h6>Underline the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "Strikethrough",
                            content: "<h6>Strikethrough the content.</h6>"
                          },
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
                          customToolTip: {
                            title: "Superscript",
                            content: "<h6>Superscript the content.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              prefixIcon: "e-icon e-ribbon e-superscripticon",
                          }
                      },
                      {
                          id: "subscript",
                          text: "subscript",
                          customToolTip: {
                            title: "Subscript",
                            content: "<h6>Subscript the content.</h6>"
                          },
                          enableSeparator: true,
                          buttonSettings: {
                              contentType: ej.ContentType.ImageOnly,
                              prefixIcon: "e-icon e-ribbon e-subscripticon",
                          }
                      },

                      {
                          id: "fontcolor",
                          text: "Font Color",
                          customToolTip: {
                            title: "Font Color",
                            content: "<h6>Change the Font Color.</h6>"
                          },
                          type: ej.Ribbon.type.custom,
                          contentID: "fontcolor"
                      },
                      {
                          id: "fillcolor",
                          text: "Fill Color",
                          customToolTip: {
                            title: "Fill Color",
                            content: "<h6>Change the Fill Color.</h6>"
                          },
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
                              customToolTip: {
                                title: "Bullet Format",
                                content: "<h6>Apply the bullet format.</h6>"
                              },
                              buttonSettings: {
                                  contentType: ej.ContentType.ImageOnly,
                                  prefixIcon: "e-icon e-ribbon e-bullet",
                              }
                          },
                                {
                                    id: "number",
                                    text: "Number Format",
                                    customToolTip: {
                                      title: "Number Format",
                                      content: "<h6>Apply the number format.</h6>"
                                    },
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-numbericon",
                                    }
                                },
                                {
                                    id: "textindent",
                                    text: "Indent",
                                    customToolTip: {
                                      title: "Text Indent",
                                      content: "<h6>Apply the text indent.</h6>"
                                    },
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-indent",
                                    }
                                },
                                {
                                    id: "textoudent",
                                    text: "Outdent",
                                    customToolTip: {
                                      title: "Text Outdent",
                                      content: "<h6>Apply the text outdent.</h6>"
                                    },
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-outdent",
                                    }
                                },
                                {
                                    id: "sortascending",
                                    text: "Sort",
                                    customToolTip: {
                                      title: "Sort Ascending",
                                      content: "<h6>Sort the selected content in ascending order.</h6>"
                                    },
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-sort",
                                    }
                                },
                                {
                                    id: "border",
                                    text: "Border",
                                    customToolTip: {
                                      title: "Border",
                                      content: "<h6>Apply the border.</h6>"
                                    },
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
                                    customToolTip: {
                                      title: "JustifyLeft",
                                      content: "<h6>Justify Left.</h6>"
                                    },
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignleft",
                                    }
                                },
                                {
                                    id: "aligncenter",
                                    text: "JustifyCenter",
                                    customToolTip: {
                                      title: "JustifyCenter",
                                      content: "<h6>Justify Center.</h6>"
                                    },
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon aligncenter",
                                    }
                                },
                                {
                                    id: "alignright",
                                    text: "JustifyRight",
                                    customToolTip: {
                                      title: "JustifyRight",
                                      content: "<h6>Justify Right.</h6>"
                                    },
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignright",
                                    }
                                },
                                {
                                    id: "justify",
                                    text: "JustifyFull",
                                    customToolTip: {
                                      title: "JustifyFull",
                                      content: "<h6>Justify Full.</h6>"
                                    },
                                    enableSeparator: true,
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon justify",
                                    }
                                },
                                {
                                    id: "uppercase",
                                    text: "Upper Case",
                                    customToolTip: {
                                      title: "UpperCase",
                                      content: "<h6>Upper Case.</h6>"
                                    },
                                    buttonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-uppercase",
                                    }
                                },
                                {
                                    id: "lowercase",
                                    text: "Lower Case",
                                    customToolTip: {
                                      title: "LowerCase",
                                      content: "<h6>Lower Case.</h6>"
                                    },
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
                                customToolTip: {
                                  title: "Undo",
                                  content: "<h6>Undo.</h6>"
                                },
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-undo",
                                }
                            },
                            {
                                id: "redo",
                                text: "Redo",
                                customToolTip: {
                                  title: "Redo",
                                  content: "<h6>Redo.</h6>"
                                },
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
                                customToolTip: {
                                  title: "ZoomIn",
                                  content: "<h6>Zoom In.</h6>"
                                },
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
                                customToolTip: {
                                  title: "ZoomOut",
                                  content: "<h6>Zoom Out.</h6>"
                                },
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
                                customToolTip: {
                                  title: "FullScreen",
                                  content: "<h6>Full Screen.</h6>"
                                },
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
                          customToolTip: {
                            title: "Tables",
                            content: "<h6>Tables.</h6>"
                          },
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
                          customToolTip: {
                            title: "Pictures",
                            content: "<h6>Pictures.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-picture",
                          }
                      },
                      {
                          id: "videos",
                          text: "Videos",
                          customToolTip: {
                            title: "Videos",
                            content: "<h6>Videos.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-video",
                          }
                      },
                      {
                          id: "shapes",
                          text: "Shapes",
                          customToolTip: {
                            title: "Shapes",
                            content: "<h6>Shapes.</h6>"
                          },
                          buttonSettings: {
                              contentType: ej.ContentType.TextAndImage,
                              imagePosition: ej.ImagePosition.ImageTop,
                              prefixIcon: "e-icon e-ribbon e-shape",
                          }
                      },
                                {
                                    id: "charts",
                                    text: "Charts",
                                    customToolTip: {
                                      title: "Charts",
                                      content: "<h6>Charts.</h6>"
                                    },
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
                                    customToolTip: {
                                      title: "Comments",
                                      content: "<h6>Comments.</h6>"
                                    },
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
                                    customToolTip: {
                                      title: "Text",
                                      content: "<h6>Text.</h6>"
                                    },
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
                                    customToolTip: {
                                      title: "DateTime",
                                      content: "<h6>Date Time.</h6>"
                                    },
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
                                    customToolTip: {
                                      title: "Hyperlink",
                                      content: "<h6>Hyperlink.</h6>"
                                    },
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
                                customToolTip: {
                                  title: "Equation",
                                  content: "<h6>Equation.</h6>"
                                },
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
                                customToolTip: {
                                  title: "PrintLayout",
                                  content: "<h6>Print Layout.</h6>"
                                },
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
                                customToolTip: {
                                  title: "Print",
                                  content: "<h6>Print.</h6>"
                                },
                                buttonSettings: {
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-print",
                                }
                            },
                            {
                                    id: "save",
                                    text: "Save",
                                    customToolTip: {
                                      title: "Save",
                                      content: "<h6>Save.</h6>"
                                    },
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
