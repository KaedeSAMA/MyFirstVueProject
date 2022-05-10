<template>
    <div class="rain">
        <div
            v-for="(item,index) in rainNumber"
            :key="index"
            class="rain-item"
            ref="rain-item"
            :style="`transform:rotate(${rotateDeg}deg);width:${w}px;height:${h}px;`"
        >
            <div class="line" :style="`animationDelay:${index*100}ms`"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rain",
    data () {
        return {

        }
    },
    props: {
        rainNumber: {
            type: Number,
            default: 0,
        },
        rotateDeg: {
            type: Number,
            default: 0,
        },
        w: {
            type: Number,
            default: 0,
        },
        h: {
            type: Number,
            default: 0,
        },
        rain_wid: {
            type: Number,
            default: 0,
        },
        rain_hig: {
            type: Number,
            default: 0,
        }
    },
    mounted () {
        this.randomRain();
    },
    methods: {
        randomRain () {
            let rainArr = this.$refs["rain-item"];
            // console.log(rainArr);
            rainArr.forEach((item) => {
                // console.log(item.children);
                item.style.top = Math.floor(Math.random() * this.rain_hig * 0.6 + 1) + "px";
                item.style.left = Math.floor(Math.random() * this.rain_wid * 0.95 + 1) + "px";
            });
        },
    },
    watch: {
        rain_wid (val) {
            // console.log(val, 'rain');
            this.randomRain();
        },
        rain_hig (val) {
            // console.log(val);
            this.randomRain();
        }
    }
};
</script>

<style lang='less' scoped>
.rain {
    width: 100%;
    height: 100%;
    position: relative;
    .rain-item {
        position: absolute;
        width: 2px;
        height: 30px;
        // background: skyblue;
        display: inline-block;
        // overflow: hidden;
        .line {
            animation: raining 2s infinite linear;
            position: absolute;
            content: "";
            top: -30px;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 183, 255, 0.7);
        }
    }
}
@keyframes raining {
    0% {
        top: -30px;
        opacity: 0;
    }
    50% {
        top: 0px;
        opacity: 1;
    }
    100% {
        top: 30px;
        opacity: 0;
    }
}
</style>
