Template.customUserFields.onRendered(() => {
  const instance = Template.instance();
  instance.$('[name="strataProfile.agentEmail"]')
    .closest('.form-group')
    .toggleClass('hidden', !instance.$('[name="strataProfile.isResident"]').prop('checked'));
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

    const fieldAgentEmail = instance.$('[name="strataProfile.agentEmail"]');
    fieldAgentEmail.attr('disabled', !thisChecked);
  },
});
