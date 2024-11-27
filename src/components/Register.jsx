import { Form, Input, Select, Button, message } from "antd";
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
    <>
      {contextHolder}
      <Form
        form={form}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        className="mx-auto mt-20 !w-3/4 text-base"
        requiredMark={(label, info) => {
          return (
            <div>
              {label}
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
        <div className="flex justify-between">
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
          >
            <Input className="text-base" placeholder="First Name" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input className="text-base" placeholder="Last Name" />
          </Form.Item>
        </div>

        <div className="flex justify-between">
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
          >
            <Input className="text-base" placeholder="Email" />
          </Form.Item>
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
          >
            <Input className="text-base" placeholder="Hackerrank Username" />
          </Form.Item>
        </div>

        <div className="flex justify-between">
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
          >
            <Input className="text-base" placeholder="10 digit phone number" />
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
          >
            <Select options={DIVISIONS} className="text-base" />
          </Form.Item>
        </div>

        <div className="flex justify-between">
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
          >
            <Select className="text-base" options={CLASSES} />
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
          >
            <Input className="text-base" placeholder="Class Roll number" />
          </Form.Item>
        </div>

        <Button htmlType="submit">Register</Button>
      </Form>
    </>
  );
}
