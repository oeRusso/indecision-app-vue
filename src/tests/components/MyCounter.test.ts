import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';
import { describe, test } from 'vistest';

describe( '<MyCounter/>',() => {
    test('should martch snaptshop', () => {
        const wrapper = mount(MyCounter);
    });
})
    