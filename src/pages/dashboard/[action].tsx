import { DashboardWrapper } from '../../components';

export default function Dashboard() {
  const channels = [
    { id: 123, name: 'canal 123', redirect: './channel&id=123' },
    { id: 124, name: 'canal 124', redirect: './channel&id=124' },
    { id: 125, name: 'canal 125', redirect: './channel&id=125' },
  ];
  const streams = [
    { id: 'stream-id-1', name: 'stream 123', redirect: './stream&id=123' },
  ];

  return (
    <DashboardWrapper channels={channels} streams={streams}>
      Custom Dashboard
    </DashboardWrapper>
  );
}
