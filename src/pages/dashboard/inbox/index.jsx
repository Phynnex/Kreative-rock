import ActionBtnDashboard from 'components/dashboard/actionbuttons';
import Header from './header';
import '../../../assets/css/inbox.css';
import InboxLayout from './InboxLayout/InboxLayout';

function InboxPage() {
  return (
    <div>
      <ActionBtnDashboard />
      <div>
        <Header />
        <InboxLayout />
      </div>
    </div>
  );
}

export default InboxPage;
