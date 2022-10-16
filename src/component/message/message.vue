<template>
    <div class="message-wrapper" v-if="cms.loader">
        <div class="message">
            <div>
                <div class="message-title">{{cms.params.name}}</div>
                <p class="message-text">{{cms.params.text}}</p>
            </div>
            <div class="message-container-button">
                <button @click="clickCancel" class="message-button message-button-cancel">{{textCancel}}</button>
                <button @click="clickOk" class="message-button message-button-ok">{{textOk}}</button>
            </div>
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