<template>
  <div class="page">
    <h2>View Profile</h2>
    <div class="profile-info">
      <div class="profile-field">
        <span class="field-label">First Name:</span>
        <span>{{ firstName }}</span>
      </div>
      <div class="profile-field">
        <span class="field-label">Last Name:</span>
        <span>{{ lastName }}</span>
      </div>
      <div class="profile-field">
        <span class="field-label">Phone Number:</span>
        <span>{{ phoneNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Ivan', 
      lastName: 'Hunter',   
      phoneNumber: '123-456-7890' 
    };
  }
};
</script>

<style>
.page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-field {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.field-label {
  font-weight: bold;
  margin-right: 10px;
}

</style>
