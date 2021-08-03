import VersoCard from '@/components/nongeneric-components/VersoCard.vue';
import CardFormular from '@/components/nongeneric-components/CardFormular.vue';
import CardShowData from '@/components/nongeneric-components/CardShowData.vue';
import CustomButton from '@/components/generic-components/Button.vue';
import { shallowMount } from '@vue/test-utils';

describe('VersoCard.vue', () => {
  // 'Verso Card' represent the verso of a component card
  // this component can show the data (CardShowData) or the formular (CardFormular)

  // props for the component wrapper
  const memberProp = {
    id: 2,
    name: 'Sponge Bob',
    role: 'absorbant',
    city: 'Lyon',
  };

  it('TEST 0 : check if class ".verso-card" from component exist', () => {
    // create a wrapper of the component and add props
    const VersoCardWrapper = shallowMount(VersoCard, {
      propsData: { memberProp },
    });
    // expect at the initiation of the component ".verso-card" class exist
    expect(VersoCardWrapper.find('.verso-card').exists()).toBe(true);
  });

  it('TEST 1 : When user trigger the CustomButton, the formular appear', async () => {
    // mock functrion
    const mockShowForm = jest.spyOn(VersoCard.methods, 'showForm');

    // create a wrapper of the component and add props
    const VersoCardWrapper = shallowMount(VersoCard, {
      propsData: { memberProp },
    });
    // wrapper for nested button component
    const childButtonWrapper = VersoCardWrapper.findComponent(CustomButton);

    // Initial state : formular component is hidden & ShowData component is shown
    expect(VersoCardWrapper.findComponent(CardShowData).exists()).toBe(true);
    expect(VersoCardWrapper.findComponent(CardFormular).exists()).toBe(false);

    // expect 'isForm' to be false to not show the formular
    expect(VersoCardWrapper.vm.isForm).toBe(false);

    // Simulate an emit from child component
    childButtonWrapper.vm.$emit('userClicked');

    // the method to show formular is called
    expect(mockShowForm).toHaveBeenCalled();

    // expect 'isForm' to be true to show the formular
    expect(VersoCardWrapper.vm.isForm).toBe(true);

    // update Vue instance to be able to see changes in test
    await VersoCardWrapper.vm.$nextTick();

    // Final state : formular component is shown & ShowData component is hidden
    expect(VersoCardWrapper.findComponent(CardShowData).exists()).toBe(false);
    expect(VersoCardWrapper.findComponent(CardFormular).exists()).toBe(true);
  });
});
