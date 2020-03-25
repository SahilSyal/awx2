import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withI18n } from '@lingui/react';
import { CardBody } from '@components/Card';
import UserForm from '../shared/UserForm';
import { UsersAPI } from '@api';

function UserEdit({ user, history }) {
  const [formSubmitError, setFormSubmitError] = useState(null);

  const handleSubmit = async values => {
    setFormSubmitError(null);
    try {
      await UsersAPI.update(user.id, values);
      history.push(`/users/${user.id}/details`);
    } catch (error) {
      setFormSubmitError(error);
    }
  };

  const handleCancel = () => {
    history.push(`/users/${user.id}/details`);
  };

  return (
    <CardBody>
      <UserForm
        user={user}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        submitError={formSubmitError}
      />
    </CardBody>
  );
}

export default withI18n()(withRouter(UserEdit));