import { DashboardWrapper } from '../../components';

export default function Dashboard() {
  const channels = [
    { id: 123, name: 'canal 123', redirect: './channel&id=123' },
    { id: 124, name: 'canal 124', redirect: './channel&id=124' },
    { id: 125, name: 'canal 125', redirect: './channel&id=125' },
  ];
  const streams = [
    { id: 'stream-id-1', name: 'stream 123', redirect: './stream&id=123' },
    { id: 'stream-id-2', name: 'stream 124', redirect: './stream&id=124' },
    { id: 'stream-id-3', name: 'stream 125', redirect: './stream&id=125' },
    { id: 'stream-id-4', name: 'stream 126', redirect: './stream&id=126' },
  ];

  return (
    <DashboardWrapper channels={channels} streams={streams}>
      Custom Dashboard
    </DashboardWrapper>
  );
}
