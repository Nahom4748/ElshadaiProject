import React from 'react'
import AdminUsersList from '../../Components/Admin/AdminUsers/AdminUsersList';
import AdminMenu from '../../Components/Admin/AdminMenu/AdminMenu';
import AdminHeading from '../../Components/Admin/AdminHeading/AdminHeading';

function UsersList() {
  return (
    <div>
      <>
        <AdminHeading />
        <div class="container-fluid-2">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
            <AdminMenu />
            <AdminUsersList />
          </div>
        </div>
      </>
    </div>
  );
}

export default UsersList
