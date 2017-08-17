// Ionic Starter App
// 'app' is the name of this angular module (also set in a <body> attribute in index.html)




angular.module('app', [
    'ionic', 'ngCordova', 'pascalprecht.translate',
    'app.controllers', 'app.filters', 'ionicLazyLoad', 'slickCarousel'
])

        .run(function ($ionicPlatform, $rootScope, $http, $ionicPopup) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default
//                if (window.cordova && window.cordova.plugins.Keyboard) {
//                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
            Service($rootScope, $http, $ionicPopup);
        })
        .constant("Config", {
            "WebUrl": "http://localhost/code/happenstance/",
            "AppName": "Happenspances",
            "AndroidAppUrl": "https://play.google.com/store/apps/details?id=com.myspecialgames.advanced2048game",
            "ErrorMessage": "End of results"
        })
        // config contact
        .constant("ConfigContact", {
            "EmailId": "weblogtemplatesnet@gmail.com",
            "ContactSubject": "Contact"
        })
        // config admon
        .constant("ConfigAdmob", {
            "interstitial": "ca-app-pub-3940256099942544/6300978111",
            "banner": "ca-app-pub-3940256099942544/1033173712"
        })
        // color variations
        .constant("Color", {
            "AppColor": "light", //light, stable, positive, calm, balanced, energized, assertive, royal, dark
        })
        // push notification
        .constant("PushNoti", {
            "senderID": "senderID",
        })
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $translateProvider) {
            $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');
            $ionicConfigProvider.scrolling.jsScrolling(false);
            $ionicConfigProvider.tabs.position('bottom');
            $ionicConfigProvider.form.checkbox('square');
            $ionicConfigProvider.views.transition('none');  //('fade-in')

            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })
                    .state('app.home', {
                        url: '/home', //首页
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/templates/home.html',
                                controller: 'HomeCtrl'
                            }
                        }
                    })
                    .state('app.lists', {
                        url: '/lists/:cmd',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/lists.html',
                                controller: 'ListsCtrl'
                            }
                        }
                    })
                    .state('app.certDownload', {
                        url: '/certDownload', //�?书下载，其实就是内容管�?�
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/certDownload.html',
                                controller: 'certCtrl'
                            }
                        }
                    })
                    .state('app.searchAgent', {
                        url: '/searchAgent', //附近�?销商
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/searchAgent.html',
                                controller: 'SearchAgentCtrl'
                            }
                        }
                    })
                    .state('app.agents', {
                        url: '/agents', //附近�?销商列表
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/agents.html',
                                controller: 'AgentsCtrl'
                            }
                        }
                    })
                    .state('app.survey', {
                        url: '/survey', //问�?�调查
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/survey.html'
                            }
                        }
                    })
                    .state('app.register', {
                        url: '/register',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/templates/registration.html',
                                controller: 'registerCtrl'
                            }
                        }
                    })
                    .state('app.login', {
                        url: '/login',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/login.html',
                                controller: 'loginCtrl'
                            }
                        }
                    })

                    .state('app.women', {
                        url: '/women',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/women.html',
                                controller: 'womenCtrl'
                            }
                        }
                    })
                    .state('app.my_account', {
                        url: '/my_account',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/my_account.html',
                                controller: 'my_accountCtrl'
                            }
                        }
                    })
                    .state('app.CategoryList', {
                        url: '/categoryList/:categoryid/:name',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/categorylist.html',
                                controller: 'CategoryListCtrl'
                            }
                        }
                    })
                    .state('app.CategoryProductList', {
                        url: '/CategoryProductList/:categoryid', //????
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/categoryproductlist.html',
                                controller: 'CategoryProductListCtrl'
                            }
                        }
                    })

                    .state('app.forgotPwd', {
                        url: '/forgotPwd',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/templates/forgotpwd.html',
                                controller: 'forgotPwdCtrl'
                            }
                        }
                    })
                    .state('app.setting', {
                        url: '/setting',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/setting.html',
                                controller: 'settingCtrl'
                            }
                        }
                    })
                    .state('app.productDetail', {
                        url: '/productDetail/:productid',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/productDetail.html',
                                controller: 'productDetailCtrl'
                            }
                        }
                    })
                    .state('app.searchResult', {
                        url: '/searchResult',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/searchResult.html',
                                controller: 'SearchResultCtrl'
                            }
                        }
                    })
                    .state('app.searchAdv', {
                        url: '/searchAdv', //高级查询
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/searchAdv.html',
                                controller: 'SearchAdvCtrl'
                            }
                        }
                    })
                    .state('app.send_invitation', {
                        url: "/send_invitation",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/send_invitation.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.invitation', {
                        url: "/invitation",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/receive_invitation.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.send_message', {
                        url: "/send_message",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/send_message.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.nearbycontacts', {
                        url: "/nearbycontacts",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/nearbycontacts.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.change_password', {
                        url: "/change_password",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/change_password.html",
                                controller: "ChangePwdCtrl"
                            }
                        }
                    })
                    .state('app.messages', {
                        url: "/messages",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/messages.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.reply_message', {
                        url: "/reply_message",
                        cache: false,
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/reply_message.html",
                                controller: "HomeCtrl"
                            }
                        }
                    })
                    .state('app.contact', {
                        url: "/contact",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/templates/contacts.html",
                                controller: "contactCtrl"
                            }
                        }
                    })
                    .state('app.frame', {
                        url: '/frame/:page',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/templates/frame.html',
                                controller: 'FrameCtrl'
                            }
                        }
                    });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');


        })
        .filter('capitalize', function () {
            return function (input) {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
        })
        .directive('onFinishRender', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit('ngRepeatFinished');
                        });
                    }
                }
            }

        });

window.onerror = function (e, file, line) {
    if (!Config.debug) {
        return;
    }
    alert([e, file, line].join(', '));
};


function setStorage(key, value) {
    localStorage.setItem(key, value);
}

function getStorage(key) {
    return localStorage.getItem(key);
}

function removeStorage(key) {
    localStorage.removeItem(key);
}

function explode(sep, string) {
    var res = string.split(sep);
    return res;
}

function urlencode(data) {
    return encodeURIComponent(data);
}
