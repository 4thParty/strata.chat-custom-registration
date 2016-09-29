Template.customUserFields.onRendered(() => {
  const instance = Template.instance();

  // disable agent email if the user is an owner
  instance.$('[name="strataProfile.agentEmail"]')
    .attr('disabled', instance.$('[name="strataProfile.isOwner"]').prop('checked'));
});

Template.customUserFields.events({
  'change [name="strataProfile.isOwner"]' (event, instance) {
    const dependsOn = instance.$('[name="strataProfile.isResident"]');
    const thisChecked = $(event.target).prop('checked');

    // ensure at least of one the checkboxes is checked at all times
    if (!thisChecked)
      dependsOn.prop('checked', !thisChecked).change();

    const fieldAgentEmail = instance.$('[name="strataProfile.agentEmail"]');
    fieldAgentEmail.attr('disabled', thisChecked);
  },
  'change [name="strataProfile.isResident"]' (event, instance) {
    const dependsOn = instance.$('[name="strataProfile.isOwner"]');
    const thisChecked = $(event.target).prop('checked');

    if (!thisChecked)
      dependsOn.prop('checked', !thisChecked).change();
  },
});
