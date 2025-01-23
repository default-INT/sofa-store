import { memo, useCallback, useState } from 'react';
import { UserInfoView } from '../UserInfoView';
import { UserInfoForm } from '../UserInfoForm';

export const UserInfo = memo(() => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOnEditMode = useCallback(() => {
    setIsEdit(true);
  }, []);

  const handleOffEditMode = useCallback(() => {
    setIsEdit(false);
  }, []);

  if (isEdit) return <UserInfoForm onSubmit={handleOffEditMode} />;

  return <UserInfoView onEditPress={handleOnEditMode} />;
});

UserInfo.displayName = 'UserInfo';
