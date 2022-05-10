<template>
    <div id="root">
        <FormTitle />
        <Form />
        <SupportButton />
    </div>
</template>

<script>
import Form from './Form.vue'
import SupportButton from './SupportButton.vue';
import FormTitle from './FormTitle.vue';
import OtherTips from './OtherTips.vue';
// import { component } from 'vue/types/umd';

export default {
    name: 'FormSubmitApp',
    components: {
        Form,
        SupportButton,
        FormTitle,
        OtherTips,
    },
}
</script>

<style scoped>
#root {
    padding: 50px;
    width: 550px;
    /* border: 1px solid; */
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.267), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: rgba(202, 146, 255, 0.384);
}
.alert_reg {
    animation: alert_move_in 1s;
}
@keyframes alert_move_in {
    from {
        transform: rotateX(-500px);
    }
    to {
        transform: translateX(0px);
    }
}
</style>