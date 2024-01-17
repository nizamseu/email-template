import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    subject: "MJML Code - Newsletter",
    content: {
      data: {
        value: {
          fonts: [],
          "font-size": "14px",
          breakpoint: "480px",
          headStyles: [],
          responsive: true,
          "text-color": "#000000",
          "font-family": "lucida Grande,Verdana,Microsoft YaHei",
          "line-height": "1.7",
          headAttributes: "",
        },
      },
      type: "page",
      children: [
        {
          data: {
            value: {
              content: "<!-- Header -->",
            },
          },
          type: "raw",
          children: [],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
          },
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_image",
                  children: [],
                  attributes: {
                    src: "https://avatars0.githubusercontent.com/u/16115896?v=3&s=200",
                    align: "center",
                    width: "50px",
                    height: "auto",
                    padding: "10px 25px 10px 25px",
                  },
                },
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_divider",
                  children: [],
                  attributes: {
                    align: "center",
                    padding: "10px 0px 0px 0px",
                    "border-color": "#f8f8f8",
                    "border-style": "solid",
                    "border-width": "1px",
                    "vertical-spacing": "0",
                    "horizontal-spacing": "0",
                  },
                },
              ],
              attributes: {
                width: "100%",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "white",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {
                      content: "Here is what you've missed",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "grey",
                    padding: "10px 25px 10px 25px",
                    "font-size": "20px",
                    "font-family": "Helvetica Neue",
                    "font-weight": "200",
                  },
                },
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_divider",
                  children: [],
                  attributes: {
                    align: "center",
                    padding: "10px 0px 0px 0px",
                    "border-color": "#f8f8f8",
                    "border-style": "solid",
                    "border-width": "1px",
                    "vertical-spacing": "0",
                    "horizontal-spacing": "0",
                  },
                },
              ],
              attributes: {
                width: "100%",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fcfcfc",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              content: "<!-- Article -->",
            },
          },
          type: "raw",
          children: [],
          attributes: {},
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_image",
                  children: [],
                  attributes: {
                    src: "https://mjml.io/assets/img/responsive.png",
                    align: "center",
                    width: "100px",
                    height: "auto",
                    padding: "10px 25px 10px 25px",
                  },
                },
              ],
              attributes: {
                width: "130px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {
                      content: "Sed ut perspiciatis",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "grey",
                    padding: "10px 25px 10px 25px",
                    "font-size": "20px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "grey",
                    padding: "10px 25px 10px 25px",
                  },
                },
              ],
              attributes: {
                width: "350px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "white",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              content: "<!-- Editor -->",
            },
          },
          type: "raw",
          children: [],
          attributes: {},
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {
                      content: "Explore our new features",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "rgb(165, 176, 184)",
                    padding: "10px 25px 10px 25px",
                    "font-size": "20px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#f3f3f3",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_image",
                  children: [],
                  attributes: {
                    src: "https://cloud.githubusercontent.com/assets/6558790/12450760/ee034178-bf85-11e5-9dda-98d0c8f9f8d6.png",
                    align: "center",
                    height: "auto",
                    padding: "10px 25px 10px 25px",
                  },
                },
              ],
              attributes: {
                width: "100%",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "0px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#f3f3f3",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "advanced_image",
                  children: [],
                  attributes: {
                    src: "https://mjml.io/assets/img/easy-and-quick.png",
                    align: "center",
                    width: "100px",
                    height: "auto",
                    padding: "10px 25px 10px 25px",
                  },
                },
              ],
              attributes: {
                width: "130px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {
                      content: "Right on time!",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "grey",
                    padding: "10px 25px 10px 25px",
                    "font-size": "20px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "grey",
                    padding: "10px 25px 10px 25px",
                  },
                },
              ],
              attributes: {
                width: "350px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fcfcfc",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
        {
          data: {
            value: {
              noWrap: false,
            },
          },
          type: "advanced_section",
          children: [
            {
              data: {
                value: {},
              },
              type: "advanced_column",
              children: [
                {
                  data: {
                    value: {
                      content: "Stay in touch!",
                    },
                  },
                  type: "advanced_text",
                  children: [],
                  attributes: {
                    align: "center",
                    padding: "10px 25px 10px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      elements: [
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
                          href: "#",
                          name: "twitter",
                          target: "_blank",
                          content: "Facebook",
                          "icon-size": "20px",
                        },
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
                          href: "#",
                          name: "facebook",
                          target: "_blank",
                          content: "Google",
                          "icon-size": "20px",
                        },
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
                          href: "",
                          target: "_blank",
                          content: "Twitter",
                          "icon-size": "20px",
                        },
                      ],
                    },
                  },
                  type: "advanced_social",
                  children: [],
                  attributes: {
                    mode: "horizontal",
                    align: "center",
                    color: "#333333",
                    padding: "10px 25px 10px 25px",
                    "font-size": "13px",
                    "icon-size": "20px",
                    "font-weight": "normal",
                    "line-height": "22px",
                    "icon-padding": "0px",
                    "text-padding": "4px 4px 4px 0px",
                    "border-radius": "3px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#f3f3f3",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
      ],
      attributes: {
        width: "600px",
        "background-color": "#E1E8ED",
      },
    },
  });
};

export default handler;
