import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    subject: "Racoon - Ecommerce",
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
              noWrap: false,
            },
          },
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Racoon logo",
                    src: "http://191n.mj.am/img/191n/3s/x4u.png",
                    href: "https://mjml.io",
                    align: "center",
                    height: "auto",
                    padding: "10px 10px 10px 10px",
                  },
                },
              ],
              attributes: {
                width: "50%",
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
            "background-color": "#ffffff",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 17px;">SPRING PROMO</p>\n          <p>50%</p>\n          <p>OFFER</p>\n          <p style="font-size: 13px">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br /></p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#fff",
                    padding: "10px 25px 10px 25px",
                    "font-size": "40px",
                  },
                },
                {
                  data: {
                    value: {
                      content: "SHOP NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fa8739",
                    border: "none",
                    target: "_blank",
                    padding: "15px 25px 40px 25px",
                    "font-size": "16px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#fff",
                  },
                },
              ],
              attributes: {
                width: "200px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Clothes set",
                    src: "https://assets.maocanhua.cn/57b75a82-e8df-4281-9590-fb9487466d6e-image.png",
                    align: "center",
                    width: "400px",
                    border: "none",
                    height: "auto",
                    padding: "0px 0px 0px 0px",
                  },
                },
              ],
              attributes: {
                width: "400px",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "0px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fa8739",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Box free shipping",
                    src: "http://191n.mj.am/img/191n/3s/x4t.png",
                    align: "center",
                    width: "42px",
                    border: "none",
                    height: "auto",
                    padding: "10px 0px 10px 0px",
                  },
                },
              ],
              attributes: {
                width: "25%",
                border: "none",
                padding: "10px 0px 10px 0px",
                "vertical-align": "middle",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      content:
                        '<p>FREE SHIPPING ON ORDER <span style="font-weight: bold;color: rgb(250, 135, 57);">OVER 55&#x20AC;</span></p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "#fff",
                    padding: "0px 25px 10px 25px",
                    "font-size": "18px",
                  },
                },
              ],
              attributes: {
                width: "75%",
                border: "none",
                padding: "10px 0px 10px 0px",
                "vertical-align": "middle",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "0px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#2f323b",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
                hidden: false,
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Chesterk tank",
                    src: "http://191n.mj.am/img/191n/3s/x4v.jpg",
                    align: "center",
                    width: "209px",
                    border: "none",
                    height: "auto",
                    padding: "30px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>CHESTERK TANK</p>\n          <p style="color: rgb(250, 135, 57);">15&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Beyond backpack",
                    src: "http://191n.mj.am/img/191n/3s/x4g.jpg",
                    align: "center",
                    width: "178px",
                    border: "none",
                    height: "auto",
                    padding: "10px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>BEYOND BACKPACK</p>\n          <p style="color: rgb(250, 135, 57);">20&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#612d0a",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fff",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Jensen shorts",
                    src: "http://191n.mj.am/img/191n/3s/x46.jpg",
                    align: "center",
                    width: "182px",
                    border: "none",
                    height: "auto",
                    padding: "30px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>JENSEN SHORTS</p>\n          <p style="color: rgb(250, 135, 57);">28&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Verdant cap",
                    src: "http://191n.mj.am/img/191n/3s/x4h.jpg",
                    align: "center",
                    width: "129px",
                    border: "none",
                    height: "auto",
                    padding: "20px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>VERDANT CAP</p>\n          <p style="color: rgb(250, 135, 57);">20&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 25px 10px 25px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Blake polo shirt",
                    src: "http://191n.mj.am/img/191n/3s/x4i.jpg",
                    align: "center",
                    width: "208px",
                    border: "none",
                    height: "auto",
                    padding: "20px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>BLAKE POLO SHIRT</p>\n          <p style="color: rgb(250, 135, 57);">25&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Sketch floral",
                    src: "http://191n.mj.am/img/191n/3s/x4j.jpg",
                    align: "center",
                    width: "72px",
                    border: "none",
                    height: "auto",
                    padding: "20px 0px 20px 0px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>SKETCH FLORAL</p>\n          <p style="color: rgb(250, 135, 57);">23&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "bottom",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "20px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fff",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Man 1",
                    src: "http://191n.mj.am/img/191n/3s/x4k.jpg",
                    align: "center",
                    width: "301px",
                    height: "auto",
                    padding: "0px 0px 0px 0px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 19px;">ANDERSON SWEATER</p>\n          <p style="font-size: 36px;">75&#x20AC;</p>\n          <p>The Anderson Sweater features a floral all-over print with contrast colour.</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "#fff",
                    padding: "0px 25px 0px 25px",
                    "font-size": "13px",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fa8739",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 20px 30px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#fff",
                  },
                },
              ],
              attributes: {
                width: "50%",
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "0px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fa8739",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 19px;">ALDER TWO JONES JACKET</p>\n          <p style="font-size: 36px;">100&#x20AC;</p>\n          <p>Colour-block design, zip entry, oxford hood lining, side pockets &amp; TC lining.</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "left",
                    color: "#fff",
                    padding: "0px 25px 0px 25px",
                    "font-size": "13px",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Man 2",
                    src: "http://191n.mj.am/img/191n/3s/xj6.jpg",
                    align: "center",
                    width: "302px",
                    border: "none",
                    height: "auto",
                    padding: "0px 0px 0px 0px",
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
            padding: "0px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#2f323b",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 14px;">DISCOVER OUR</p>\n          <p style="font-size: 27px;">SUMMER COLLECTION</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#fff",
                    padding: "10px 25px 10px 25px",
                    "font-size": "13px",
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
            padding: "0px 0px 0px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fa8739",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Topaz C3 shoes",
                    src: "http://191n.mj.am/img/191n/3s/x4q.jpg",
                    align: "center",
                    height: "auto",
                    padding: "0px 25px 0px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>TOPAZ C3 SHOES</p>\n          <p style="color: rgb(250, 135, 57);">70&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "font-size": "13px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Camden backpack",
                    src: "http://191n.mj.am/img/191n/3s/x4r.jpg",
                    align: "center",
                    width: "199px",
                    border: "none",
                    height: "auto",
                    padding: "0px 25px 0px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p>CAMDEN BACKPACK</p>\n          <p style="color: rgb(250, 135, 57);">50&#x20AC;</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#000",
                    padding: "0px 25px 0px 25px",
                    "font-size": "15px",
                    "font-weight": "bold",
                  },
                },
                {
                  data: {
                    value: {
                      content: "BUY NOW",
                    },
                  },
                  type: "button",
                  children: [],
                  attributes: {
                    href: "https://mjml.io",
                    align: "center",
                    color: "#fff",
                    border: "none",
                    target: "_blank",
                    padding: "0px 30px 10px 30px",
                    "text-align": "center",
                    "font-weight": "normal",
                    "line-height": "120%",
                    "border-radius": "3px",
                    "inner-padding": "10px 25px 10px 25px",
                    "vertical-align": "middle",
                    "background-color": "#fa8739",
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
            "background-color": "#fff",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Cards",
                    src: "http://191n.mj.am/img/191n/3s/x47.png",
                    align: "center",
                    width: "72px",
                    height: "auto",
                    padding: "10px 25px 10px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 15px;font-weight: bold;">PAYMENT METHODS</p>\n          <p>We accept all majors payments options</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#fff",
                    padding: "0px 25px 0px 25px",
                    "font-size": "13px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Currencies",
                    src: "http://191n.mj.am/img/191n/3s/x48.png",
                    align: "center",
                    width: "70px",
                    border: "none",
                    height: "auto",
                    padding: "10px 25px 0px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 15px;font-weight: bold;">CURRENCIES CHOICE</p>\n          <p>You have the choice to pay with your own currencies</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#fff",
                    padding: "0px 25px 0px 25px",
                    "font-size": "13px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "top",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Express",
                    src: "http://191n.mj.am/img/191n/3s/x4y.png",
                    align: "center",
                    width: "82px",
                    border: "none",
                    height: "auto",
                    padding: "10px 25px 8px 25px",
                  },
                },
                {
                  data: {
                    value: {
                      content:
                        '<p style="font-size: 15px;font-weight: bold;">EXPRESS SHIPPING</p>\n          <p>Delivered tomorrow before noon</p>',
                    },
                  },
                  type: "text",
                  children: [],
                  attributes: {
                    align: "center",
                    color: "#fff",
                    padding: "0px 25px 0px 25px",
                    "font-size": "13px",
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
            "background-color": "#2f323b",
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
          type: "section",
          children: [
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {},
                  },
                  type: "image",
                  children: [],
                  attributes: {
                    alt: "Racoon logo",
                    src: "http://191n.mj.am/img/191n/3s/x49.png",
                    align: "center",
                    width: "180px",
                    border: "none",
                    height: "auto",
                    padding: "10px 0px 0px 0px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "middle",
              },
            },
            {
              data: {
                value: {},
              },
              type: "column",
              children: [
                {
                  data: {
                    value: {
                      elements: [
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
                          href: "[[SHORT_PERMALINK]]",
                          name: "facebook",
                          target: "_blank",
                          content: "Facebook",
                          "icon-size": "20px",
                        },
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
                          href: "[[SHORT_PERMALINK]]",
                          name: "twitter",
                          target: "_blank",
                          content: "Google",
                          "icon-size": "20px",
                        },
                        {
                          src: "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
                          href: "[[SHORT_PERMALINK]]",
                          name: "google",
                          target: "_blank",
                          content: "Twitter",
                          "icon-size": "20px",
                        },
                      ],
                    },
                  },
                  type: "social",
                  children: [],
                  attributes: {
                    mode: "horizontal",
                    align: "center",
                    color: "#333333",
                    padding: "20px 25px 10px 25px",
                    "font-size": "13px",
                    "icon-size": "20px",
                    "font-weight": "normal",
                    "line-height": "22px",
                    "icon-padding": "0px",
                    "text-padding": "4px 4px 4px 0px",
                    "border-radius": "3px",
                    "inner-padding": "4px 4px 4px 4px",
                  },
                },
              ],
              attributes: {
                border: "none",
                padding: "0px 0px 0px 0px",
                "vertical-align": "middle",
              },
            },
          ],
          attributes: {
            border: "none",
            padding: "0px 0px 20px 0px",
            direction: "ltr",
            "text-align": "center",
            "background-size": "auto",
            "background-color": "#fa8739",
            "background-repeat": "repeat",
            "background-position": "top center",
          },
        },
      ],
      attributes: {
        width: "600px",
        "background-color": "#d6dde5",
      },
    },
  });
};

export default handler;
