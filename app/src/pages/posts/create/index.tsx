import { DataManager } from '@next-hasura-boilerplate/data-lib';
import { useSession } from 'next-auth/client';
import { FC } from 'react';
import styles from './posts.module.scss';

const Index: FC = (props) => {
  const [session, loading] = useSession();
  if (!session) {
    return <div>You must be logged in to post</div>;
  }
  const authenticatedDataManager = new DataManager();
  return <div className={styles.container}></div>;
};

export default Index;
