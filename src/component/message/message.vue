<template>
    <div class="message">
        <div>
            <div class="message-title">{{cms.params.name}}</div>
            <p class="message-text">{{cms.params.text}}</p>
        </div>
        <div class="message-container-button">
            <button class="message-button-cancel">{{cms.params.name_cancel}}</button>
            <button class="message-button-ok">{{cms.params.name_ok}}</button>
        </div>
    </div>
</template>
<script lang="ts">
import { message } from './message';

export default {
    props: {
        id: { type: Number }
    },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...message(id)
        }
    }
}
</script>