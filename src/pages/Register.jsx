import { Form, Input, Select, Button, message, InputNumber } from "antd";
import { DIVISIONS, CLASSES } from "../utils";
import { formatFormData, registerParticipant } from "../utils";

export default function Register() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = ({ type, content }) => {
    messageApi.open({
      type,
      content,
    });
  };
  return (
    <div
      className="flex h-dvh flex-col items-center justify-center gap-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      {contextHolder}
      <h1 className="font-mono text-4xl font-bold tracking-[5px] text-accent">
        &lt;/MGM Code Clash&gt;
      </h1>
      <div className="container mx-auto w-2/3 rounded-3xl border-4 border-accent p-10 backdrop-blur-md lg:w-1/2">
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
                <span className="text-white">{label}</span>
                {info.required ? <span className="text-red-600">*</span> : ""}
              </div>
            );
          }}
          onFinish={(value) => {
            const formattedData = formatFormData({ data: value });
            registerParticipant({
              formData: formattedData,
              showMessage,
              formInstance: form,
            });
          }}
          autoComplete="off"
        >
          <div className="flex w-full justify-between">
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
              className="w-2/5"
            >
              <Input className="w-full text-base" placeholder="First Name" />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName" className="w-2/5">
              <Input className="w-full text-base" placeholder="Last Name" />
            </Form.Item>
          </div>
          <div className="flex w-full justify-between">
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Phone number is required",
                },
              ]}
              validateDebounce={500}
              className="w-2/5"
            >
              <InputNumber
                addonBefore={<div className="h-full w-full bg-white">+91</div>}
                className="w-full text-base"
                placeholder="10 digit phone number"
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
              className="w-2/5"
            >
              <Input className="w-full text-base" placeholder="Email" />
            </Form.Item>
          </div>
          <div className="flex w-full justify-between">
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
              // className="w-2/5"
            >
              <Select options={CLASSES} className="w-full text-base" />
            </Form.Item>
            <Form.Item
              label="Class Roll no."
              name="class_roll_number"
              rules={[
                {
                  required: true,
                  message: "Roll no. is required",
                  whitespace: true,
                },
              ]}
              validateDebounce={500}
              className="w-2/5"
            >
              <Input
                className="w-full text-base"
                placeholder="Class Roll number"
              />
            </Form.Item>
          </div>
          <div className="flex w-full justify-between">
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
              className="w-2/5"
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
              className="w-2/5"
            >
              <Select options={DIVISIONS} className="w-full text-base" />
            </Form.Item>
          </div>
          <Button
            htmlType="submit"
            className="self-center rounded-full border-none bg-accent px-12 py-6 font-mono font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600 md:text-xl"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
