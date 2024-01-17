/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BlockManager, BasicType, AdvancedType } from "easy-email-core";
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  IEmailTemplate,
} from "easy-email-editor";
import { ExtensionProps, StandardLayout } from "easy-email-extensions";
import { useWindowSize } from "react-use";
import {
  Button,
  ConfigProvider,
  Dropdown,
  Form,
  Input,
  Menu,
  Message,
  Modal,
  PageHeader,
  Select,
  Space,
  Spin,
} from "@arco-design/web-react";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";
import axios from "axios";
import { Config } from "final-form";
import { useRouter } from "next/router";
import { log } from "console";

const defaultCategories: ExtensionProps["categories"] = [
  {
    label: "Content",
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: "0px 0px 0px 0px" } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: "Layout",
    active: true,
    displayType: "column",
    blocks: [
      {
        title: "2 columns",
        payload: [
          ["50%", "50%"],
          ["33%", "67%"],
          ["67%", "33%"],
          ["25%", "75%"],
          ["75%", "25%"],
        ],
      },
      {
        title: "3 columns",
        payload: [
          ["33.33%", "33.33%", "33.33%"],
          ["25%", "25%", "50%"],
          ["50%", "25%", "25%"],
        ],
      },
      {
        title: "4 columns",
        payload: [["25%", "25%", "25%", "25%"]],
      },
    ],
  },
];

export default function App(): React.ReactNode {
  const [template, setTemplate] = useState<any>(null);
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  const router = useRouter();
  const uuid = router.query.uuid;
  console.log("uuid", typeof uuid);

  useEffect(() => {
    let URL = `template2`;

    if (uuid) {
      if (uuid === "1") {
        URL = "template";
      } else if (uuid === "2") {
        URL = "template2";
      } else if (uuid === "3") {
        URL = "template3";
      } else URL = "template3";
      // axios.get(`/api/${URL}`).then(({ data }) => {
      //   console.log("data", data);

      //   setTemplate(data);
      // });
      axios
        .get(`https://daadaak.hamim.dev/api/default_email_template/${uuid}`)
        .then((res) => {
          setTemplate(res?.data);
        });
    }
  }, [uuid]);

  const onSubmit: Config<IEmailTemplate>["onSubmit"] = (values: any) => {
    console.log(values);
    // values.user = template?.user;
    axios
      .patch(
        `https://daadaak.hamim.dev/api/default_email_template/${uuid}/`,
        values
      )
      .then((res) => {
        alert("template Updated");
        console.log("res", res);
      });
  };

  if (!template) return <Spin />;

  return (
    <EmailEditorProvider
      data={template}
      height={"calc(100vh - 70px)"}
      autoComplete
      dashed={false}
      onSubmit={onSubmit}
    >
      {({ values }, { submit, restart }) => {
        return (
          <>
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title="Edit"
              extra={
                <Space>
                  <a
                    href="https://www.buymeacoffee.com/easyemail?utm_source=webside&utm_medium=button&utm_content=donate"
                    target="_blank"
                    onClick={(ev) => {
                      ev.preventDefault();
                      window.open(
                        "https://www.buymeacoffee.com/easyemail?utm_source=webside&utm_medium=button&utm_content=donate",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      style={{
                        marginTop: -16,
                        position: "relative",
                        top: 11,
                        height: 32,
                      }}
                      src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
                      alt="Buy Me A Coffee"
                    />
                  </a>
                  <Button type="primary" onClick={submit}>
                    Save
                  </Button>
                </Space>
              }
            />
            <StandardLayout
              compact={!smallScene}
              showSourceCode={true}
              categories={defaultCategories}
            >
              <EmailEditor />
            </StandardLayout>
          </>
        );
      }}
    </EmailEditorProvider>
  );
}
