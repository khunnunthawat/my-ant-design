import { Button, DatePicker, Typography, version, Tooltip } from 'antd';
const { Title } = Typography;
import Button1 from '@/components/button1';
import {
  SearchOutlined
} from '@ant-design/icons';

export default function Home() {
  return (
    <>
      <Title level={2}>antd version: {version}</Title>
      <DatePicker />
      <Button
        type='primary'
        className='ml-2 px-4 py-1 hover:bg-gray-900 focus:outline-none rounded-md'
      >
        Primary Button
      </Button>
      <br />

      <Button type='dashed' icon={<SearchOutlined />}>
        Search
      </Button>
      <br />
      <Button1 />
    </>
  );
}