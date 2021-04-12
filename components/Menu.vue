<template>
  <header>
        <nav id="nav">
            <!-- {{ users.loggedInUser.firstName }} -->
            <span v-if="users.loggedInUser">Hi {{ users.loggedInUser.firstName }}!</span>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li v-if="users.loggedInUser">
                    <a v-on:click="logout">Logout</a>
                </li>
                <li v-else>
                    <nuxt-link to="/login">Login</nuxt-link>
                </li>
                <li v-if="users.loggedInUser">
                    <span v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
                        Admin
                        <ul class="dropdown" :class="{ isOpen }">
                            <li>
                                <nuxt-link to="/admin/attractions">Manage Attraction</nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/admin/queues">Manage Queues</nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/admin/users">Manage Users</nuxt-link>
                            </li> 
                        </ul>
                    </span>
                </li>
                <!-- <li v-for="item in items" v-bind:key="item.name">
                    <nuxt-link :to="item.url"
                       v-if="!item.children">
                        {{ item.name }}
                    </nuxt-link>
                    <span
                        v-else
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave">
                        {{ item.name }}
                        
                        <ul class=" dropdown"
                           :class="{ isOpen }">
                            <li v-for="child in item.children" v-bind:key="child.name">
                                <nuxt-link :to="child.url">
                                    {{ child.name }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </span>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'mainMenu',
    created () {
        this.$store.dispatch('users/loadUser')
    },
    computed: mapState([
    'users'
    ]),
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
        },
        logout: function () {
            this.$store.dispatch('users/logoutUser')
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
    justify-content: flex-end;
    width: 100%;
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
    cursor: pointer;
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
    right: 0;
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