import { Form, Input, Select, Button, message, InputNumber } from "antd";
import { CLASSES } from "../utils";
import { formatFormData, registerParticipant, validatePhone } from "../utils";
import { ConfigProvider } from "antd";
import { DIVISION_OPTIONS } from "../utils/constant";
import { useState } from "react";

export default function Register() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = ({ type, content }) => {
    messageApi.open({
      type,
      content,
    });
  };
  const divisionOptions = [
    { value: "", label: "Select Division", title: "Select Division" },
    ...DIVISION_OPTIONS.map((division) => {
      return {
        value: division.value,
        title: division.value,
        label: (
          <div className="flex flex-col">
            <div className="font-medium">{division.value}</div>
            <div className="text-xs font-extralight">{division.eligiblity}</div>
          </div>
        ),
      };
    }),
  ];
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      {contextHolder}
      <h1 className="mt-24 font-mono text-3xl font-bold text-accent sm:mt-0 sm:text-4xl sm:tracking-[5px]">
        &lt;/MGM CodeClash&gt;
      </h1>

      <div className="container mx-auto mb-10 w-3/4 rounded-3xl border-4 border-accent p-12 backdrop-blur-md md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
        <ConfigProvider
          theme={{
            components: {
              InputNumber: {
                addonBg: "#ffffff",
              },
            },
            token: {
              colorPrimary: "#FFC854",
            },
          }}
        >
          <Form
            form={form}
            name="wrap"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            className="flex flex-col justify-between text-white"
            requiredMark={(label, info) => {
              return (
                <div>
                  <span className="text-white">{label}</span>{" "}
                  {info.required ? <span className="text-red-600">*</span> : ""}
                </div>
              );
            }}
            onFinish={(value) => {
              setLoading(true);
              const formattedData = formatFormData({ data: value });
              registerParticipant({
                formData: formattedData,
                showMessage,
                formInstance: form,
                setLoading,
              });
            }}
            autoComplete="off"
          >
            <div className="flex w-full flex-col justify-between sm:flex-row sm:gap-10">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Name is required",
                    whitespace: true,
                  },
                ]}
                validateDebounce={500}
                className="w-full sm:w-1/2"
              >
                <Input className="w-full text-base" placeholder="First Name" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                className="w-full sm:w-1/2"
              >
                <Input className="w-full text-base" placeholder="Last Name" />
              </Form.Item>
            </div>
            <div className="flex w-full flex-col justify-between sm:flex-row sm:gap-10">
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ validator: validatePhone, required: true }]}
                validateDebounce={500}
                className="w-full sm:w-1/2"
              >
                <InputNumber
                  addonBefore="+91"
                  className="w-full text-base"
                  placeholder="10 digit phone number"
                  controls={false}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                    type: "email",
                  },
                ]}
                validateDebounce={500}
                className="w-full sm:w-1/2"
              >
                <Input className="w-full text-base" placeholder="Email" />
              </Form.Item>
            </div>
            <div className="flex w-full flex-col items-end justify-between sm:flex-row sm:gap-10">
              <Form.Item
                label="Class"
                name="standard"
                rules={[
                  {
                    required: true,
                    message: "Class is required",
                  },
                ]}
                validateDebounce={500}
                initialValue={""}
                className="w-full sm:w-1/2"
              >
                <Select options={CLASSES} className="text-base" />
              </Form.Item>
              <Form.Item
                label="Class Roll no."
                name="class_roll_number"
                rules={[
                  {
                    required: true,
                  },
                ]}
                validateDebounce={500}
                className="w-full sm:w-1/2"
              >
                <InputNumber
                  className="w-full text-base"
                  placeholder="Class Roll number"
                  controls={false}
                />
              </Form.Item>
            </div>
            <div className="flex w-full flex-col items-end justify-between sm:flex-row sm:gap-10">
              <Form.Item
                label="Username"
                name="hackerrank_username"
                rules={[
                  {
                    required: true,
                    message: "Hackerrank username is required",
                    whitespace: true,
                  },
                ]}
                validateDebounce={500}
                className="w-full sm:w-1/2"
              >
                <Input
                  className="w-full text-base"
                  placeholder="Hackerrank Username"
                />
              </Form.Item>
              <Form.Item
                label="Division"
                name="division"
                rules={[
                  {
                    required: true,
                    message: "Division is required",
                  },
                ]}
                validateDebounce={500}
                initialValue={""}
                className="w-full sm:w-1/2"
              >
                <Select
                  options={divisionOptions}
                  className="w-full text-base"
                  labelRender={(label) => {
                    return <>{label.title}</>;
                  }}
                />
              </Form.Item>
            </div>
            <Button
              htmlType="submit"
              className="mt-5 self-center rounded-full border-none bg-accent px-12 py-6 font-mono font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600 md:text-xl"
              loading={loading}
            >
              Register
            </Button>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
}
