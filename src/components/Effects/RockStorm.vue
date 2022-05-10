<template>
    <div id="effectRoot">
        <Star :starNumber="25" :w="4" :h="4" :star_wid="scr_wid" :star_hig="scr_hig" class="star0"></Star>
        <Rain
            :rainNumber="50"
            :rotateDeg="-25"
            :w="1"
            :h="35"
            :rain_hig="scr_hig"
            :rain_wid="scr_wid"
        ></Rain>
        <StarMove :delay="0" :w="2" :h="300" :rotateDeg="-60" class="star_move0"></StarMove>
        <StarMove :delay="5" :w="2" :h="350" :rotateDeg="-70" class="star_move1"></StarMove>
        <StarMove :delay="2" :w="2" :h="250" :rotateDeg="-60" class="star_move2"></StarMove>
        <StarMove :delay="6" :w="2" :h="250" :rotateDeg="-60" class="star_move2"></StarMove>
    </div>
</template>

<script>
import StarMove from './StarMove.vue'
import Rain from './Rain.vue'
import Star from './Star.vue'
export default {
    name: 'RockStorm',
    data () {
        return {
            scr_wid: document.documentElement.clientWidth,
            scr_hig: document.documentElement.clientHeight,
        }
    },
    components: {
        StarMove,
        Rain,
        Star,
    },
    mounted () {
        this.scr_wid = document.body.clientWidth;
        this.scr_hig = document.body.clientHeight;
        window.onresize = this.debounce(() => {
            return (() => {
                this.scr_wid = document.body.clientWidth;
                this.scr_hig = document.body.clientHeight;
                console.log('wid值被更改了', this.scr_wid);
            })();
        }, 200)
    },
    methods: {
        debounce (func, timer) {
            let t = null;
            return function () {
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(() => {
                    func();
                }, timer);
            }
        }

    },
    watch: {
        scr_wid () {
            this.scr_wid = document.body.clientWidth;
        },
        scr_hig () {
            this.scr_hig = document.body.clientHeight;
        }
    }
}
</script>

<style>
#effectRoot {
    width: 100%;
    height: 500px;
}
.star_move0 {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.star_move2 {
    position: absolute !important;
    top: 2%;
    left: 15%;
    right: 0;
    bottom: 0;
}
.star_move1 {
    position: absolute !important;
    top: 8%;
    left: 42%;
    right: 0;
    bottom: 0;
}
.star0 {
    position: absolute !important;
    top: 0;
    left: 0;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: radial-gradient(
        200% 100% at bottom center,
        #f7f7b6,
        #e96f92,
        #1b2947
    );
    background: radial-gradient(
        200% 105% at top center,
        #1b2947 10%,
        #75517d 40%,
        #e96f92 65%,
        #f7f7b6
    );
    background-attachment: fixed;
}
</style>