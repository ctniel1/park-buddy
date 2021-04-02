<template>
  <header>
        <nav id="nav">
            <ul>
                <li v-for="item in items" v-bind:key="item.name">
                    <a :href="item.url"
                       v-if="!item.children">
                        {{ item.name }}
                    </a>
                    <span
                        v-else
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave">
                        {{ item.name }}
                        
                        <ul class=" dropdown"
                           :class="{ isOpen }">
                            <li v-for="child in item.children" v-bind:key="child.name">
                                <a :href="child.url">
                                    {{ child.name }}
                                </a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'nav',
    data() {
      return {
        isOpen: false,
        items: [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/login',
                name: 'Login'
            },
            {
                url: '/admin',
                name: 'Admin',
                children: [
                    {
                        url: '/admin/attractions',
                        name: 'Manage Attractions'
                    },
                    {
                        url: '/admin/queues',
                        name: 'Manage Queues'
                    },
                    {
                        url: '/admin/users',
                        name: 'Manage Users'
                    },
                ]
            }
        ]
      }
    },

    methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
    }
  }
</script>

<style>
header {
    width: 100%;
    background-color: #FFC347;
}

#nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}

#nav > ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

#nav > ul > li > a {
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
}

#nav > ul > li > span {
    position: relative;
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#nav > ul > li > span:after {
    content: '▼';
    display: inline-block;

}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    padding: 0;
    list-style-type: none;
    background-color: #FFC347;
}

.dropdown li {
    width: 250px;
    border-bottom: 1px solid #fff;
}

.dropdown li a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
}

.isOpen {
    display: block;
}
</style>