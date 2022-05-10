<template>
    <div class="star">
        <div
            v-for="(item,index) in starNumber"
            :key="index"
            class="star-item"
            ref="star-item"
            :style="`animationDelay:${index*100}ms;width:${w}px;height:${h}px;`"
        ></div>
    </div>
</template>

<script>
export default {
    name: "Star",
    data () {
        return {
            // star_scr_wid: this.$parent.scr_wid,
            // star_scr_hig: this.$parent.scr_hig,
        }
    },
    props: {
        starNumber: {
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
        star_wid: {
            type: Number,
            default: 0,
        },
        star_hig: {
            type: Number,
            default: 0,
        }
    },
    mounted () {
        this.randomStar();
    },
    methods: {
        randomStar () {
            let starArr = this.$refs["star-item"];
            // console.log(starArr);
            starArr.forEach((item) => {
                // console.log(item.children);
                item.style.top = Math.floor(Math.random() * this.star_hig * 0.5 + 1) + "px";
                item.style.left = Math.floor(Math.random() * this.star_wid + 1) + "px";
            });
        },
    },
    watch: {
        star_wid () {
            this.randomStar()
        },
        star_hig () {
            this.randomStar()
        }
    }
};
</script>

<style lang='less' scoped>
.star {
    position: relative;
    .star-item {
        position: absolute;
        width: 4px;
        height: 4px;
        display: inline-block;
        animation: staring 2s infinite linear;
        background: rgba(2, 213, 255, 1);
        border-radius: 50%;
    }
}
@keyframes staring {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
