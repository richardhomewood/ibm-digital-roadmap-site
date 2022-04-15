const EN = {
    translation: {
      header:{
        title:"Technology Atlas",
        technologies:[
          {value:"", label:"Home", color:""},
          {value:"semiconductors", label:"Semiconductors", color:"#221122"},
          {value:"ai", label:"AI", color:"#B797F8"},
          {value:"hybrid-cloud", label:"Hybrid Cloud", color:"#08BDBA"},
          {value:"security", label:"Security", color:"#8A3FFC"},
          {value:"quantum", label:"Quantum", color:"#0F62FE"},
          {value:"systems", label:"Systems", color:"#33B1FF" }
        ]
      },

      landing:{
        title:"IBM",
        subtitle:"Technology Roadmap",
        content:"Productive type theme layouts for long paragraphs with <strong>more than four lines</strong>. Productive type theme layouts."

      },

      atlas:{
        button:"Explore Roadmap",
        years:[
          {title:"2022", id:"2022"},
          {title:"2023", id:"2023"},
          {title:"2024", id:"2024"},
        ],
        technologies:[
          {
            id:"semiconductors",
            title:"Semiconductors", 
            joins:[
              {
                id: "systems",
                title:"Semiconductors and Systems",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "quantum",
                title:"Semiconductors and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              }
            ]
          },

          {
            id:"ai",
            title:"AI",
            joins:[
              {
                id: "systems",
                title:"AI and Systems",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "quantum",
                title:"AI and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "security",
                title:"AI and Security",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              }
            ]
          },

          {
            title:"Hybrid Cloud", 
            id:"hybrid-cloud",
            joins:[
              {
                id: "systems",
                title:"Hybrid Cloud and Systems",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "quantum",
                title:"Hybrid Cloud and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "ai",
                title:"Hybrid Cloud and AI",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },

            ]
          },

          {
            id:"security",
            title:"Security", 
            joins:[
              {
                id: "systems",
                title:"Security and Systems",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "quantum",
                title:"Security and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "hybrid-cloud",
                title:"Security and Hybrid Cloud",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "ai",
                title:"Security and AI",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },

            ]
          },

          {
            id:"quantum",
            title:"Quantum", 
            joins:[
              {
                id: "quantum",
                title:"Quantum and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "ai",
                title:"Quantum and AI",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
            ]
          },

          {
            id:"systems",
            title:"Systems", 
            joins:[
              {
                id: "quantum",
                title:"Systems and Quantum",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
              {
                id: "ai",
                title:"Systems and AI",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              },
            ]
          },
        ]
      },

      roadmap:{
        semiconductors:
        {
          id:"semiconductors",
          title:"IBM Semiconductors",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]  
        },
        
        ai:
        {
          id:"ai",
          title:"IBM AI",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]  
        },

        "hybrid-cloud":
        {
          id:"hybrid-cloud",
          title:"IBM Hybrid Cloud",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]  
        },

        security:
        {
          id:"security",
          title:"IBM Security",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]  
        },

        quantum:
        {
          id:"quantum",
          title:"IBM Quantum",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]       
        },
        
        systems:
        {
          id:"systems",
          title:"IBM Systems",
          sections:[
            {
              id:"2022",
              title:"2022 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will roll out our second-generation Nanosheet CMOS technology, which will feature innovative transistor, interconnect, and power distribution network elements.",
                  "We also plan to start 3D chiplet processing in Albany."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "We want to build on the performance of our first-generation Nanosheet CMOS technology, and it’s imperative to offer elements that set our logic technology apart from anyone else — for both IBM and our clients.",
                      "3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients. 3D chiplet technology will also provide enhanced chip-level performance for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will innovate on the materials we use for channels, substrates, and contacts, as well as interconnect metallization and dielectrics, for our next generation of nanosheet technology.",
                      "Micro-bumps and Through Silicon Via at the scaled pitches will enable 3D chiplet technology."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside an ecosystem of partners including Intel, Samsung, Applied Materials, Tokyo Electron, and Lam Research."
                    ]
                  },
                ]
              }
             
            },
            {
              id:"2023",
              title:"2023 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will grow our semiconductor ecosystem partnership in Albany and build early capability qualification of semiconductor technology.",
                  "We will also develop and demonstrate the feasibility of our novel interconnect “Top Via” integration scheme, which is different from the current Cu damascene integration process."
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Maturing semiconductor technology helps further strengthen the manufacturing process and ensure client success in the semiconductor industry.",
                      "The novel top via integration could eliminate the barrier requirements in traditional Cu damascene metallization and unlock the scaling opportunity for interconnect technology."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will prove out and develop our second-generation Nanosheet technology for foundry partners like Titan.",
                      "We will also utilizing noble metals, EUV lithography patterning, novel metal etching, and the top via structure, we can create an interconnect breakthrough."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, where we work alongside our Joint Development Alliance partners, including Samsung and Titan."
                    ]
                  },

                ]
              }
             
            },
            {
              id:"2024",
              title:"2024 Strategic Goal",
              media:[
                { 
                  url:"https://google.com/some-asset.mp4",
                  image:"media-1.png"
                }
              ],
              content:{
                headerBlocks:[
                  "We will continue to grow Albany’s semiconductor prototyping capability with leading-edge technologies, while expanding our ecosystem to include electronic design automation and chip design partners.",
                  "We will demonstrate the feasibility of revolutionary logic technology beyond Nanosheet, as well as 3D chiplet technology for next-generation AI accelerator Sentient 2.0+"
                ],
                columns:[
                  { 
                    title:"Importance",
                    blocks:[
                      "Expanding our semiconductor ecosystem can help to further strengthen trust in the industry and create new business opportunities, as well as new semiconductor innovations.",
                      "By extending logic technology scaling at the transistor and circuit levels, we can continue to improve the density, functionality, and cost of our chips for IBM and its clients."
                    ]
                  },
                  { 
                    title:"Enablerse",
                    blocks:[
                      "We will develop new semiconductor technologies and automate electronic design with our partners. We plan to innovate with stacked transistors, backside power distribution networks, and aggressively scaled interconnect with “Top Via” integration that can take the next generation of logic technology even further.",
                      "We will also introduce 3D chiplet technology with 3DIC design capability."
                    ]
                  },
                  { 
                    title:"Platform / Infrastructure",
                    blocks:[
                      "This will all happen at our Semiconductor R&D facility in Albany, with Pathfinding Joint Development Partner Samsung, among others."
                    ]
                  },

                ]
              }
             
            }
          ]  
        },
      }

    }
}

export default EN