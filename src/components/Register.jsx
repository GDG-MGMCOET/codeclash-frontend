import { Form, Input, Select, Button } from "antd";
import { DIVISIONS, CLASSES } from "../utils";

export default function Register() {
  return (
    <>
      <Form
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        className="!w-3/4 mx-auto text-base"
        requiredMark={(label, info) => {
          return (
            <div>
              {label}
              {info.required ? <span className="text-red-600">*</span> : ""}
            </div>
          );
        }}
        onFinish={(value) => {
          console.log(value);
        }}
        autoComplete="off"
      >
        <div className="flex justify-between">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Name is required",
                whitespace: true,
              },
            ]}
            validateDebounce={500}
          >
            <Input className="text-base" placeholder="Full Name" />
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
          >
            <Input className="text-base" />
          </Form.Item>
        </div>

        <div className="flex justify-between">
          <Form.Item
            label="Username"
            name="hackerrank_us"
            rules={[
              {
                required: true,
                message: "Name is required",
                whitespace: true,
              },
            ]}
            validateDebounce={500}
          >
            <Input className="text-base" placeholder="Hackerrank Username" />
          </Form.Item>
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
            <Input className="text-base" />
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
            label="Class Roll no."
            name="Class Roll Number"
            rules={[
              {
                required: true,
                message: "Name is required",
                whitespace: true,
              },
            ]}
            validateDebounce={500}
          >
            <Input className="text-base" placeholder="Hackerrank Username" />
          </Form.Item>
        </div>

        <Button htmlType="submit">Register</Button>
      </Form>
    </>
  );
}
