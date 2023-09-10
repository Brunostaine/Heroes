'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app-heroes documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-94b30d780eff549fed7d64bcff8c7cf14ed589e0525a8e0ad5f168d0d74e073d49bed6858f4a266aa00e1ea151499a6a548c889ad67b4e2e0cf1e4c3d8625804"' : 'data-bs-target="#xs-components-links-module-AppModule-94b30d780eff549fed7d64bcff8c7cf14ed589e0525a8e0ad5f168d0d74e073d49bed6858f4a266aa00e1ea151499a6a548c889ad67b4e2e0cf1e4c3d8625804"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-94b30d780eff549fed7d64bcff8c7cf14ed589e0525a8e0ad5f168d0d74e073d49bed6858f4a266aa00e1ea151499a6a548c889ad67b4e2e0cf1e4c3d8625804"' :
                                            'id="xs-components-links-module-AppModule-94b30d780eff549fed7d64bcff8c7cf14ed589e0525a8e0ad5f168d0d74e073d49bed6858f4a266aa00e1ea151499a6a548c889ad67b4e2e0cf1e4c3d8625804"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-105ebf5f5416db92201f6c85f40fdb737e74fa15a56117b326cbf377de59402476d341dd5f4afe67acdd95121cdc46405195c40c92977093d355fa327c336cef"' : 'data-bs-target="#xs-components-links-module-AuthModule-105ebf5f5416db92201f6c85f40fdb737e74fa15a56117b326cbf377de59402476d341dd5f4afe67acdd95121cdc46405195c40c92977093d355fa327c336cef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-105ebf5f5416db92201f6c85f40fdb737e74fa15a56117b326cbf377de59402476d341dd5f4afe67acdd95121cdc46405195c40c92977093d355fa327c336cef"' :
                                            'id="xs-components-links-module-AuthModule-105ebf5f5416db92201f6c85f40fdb737e74fa15a56117b326cbf377de59402476d341dd5f4afe67acdd95121cdc46405195c40c92977093d355fa327c336cef"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-0466a5e95c5e0cb0a995b2e39a3b23e82042538c9412ec519ab3b4a6d3f042314753f8234817ccec455eda0cf481b43b2eb3b5bd23378dbf1e7e989821c2e744"' : 'data-bs-target="#xs-components-links-module-CoreModule-0466a5e95c5e0cb0a995b2e39a3b23e82042538c9412ec519ab3b4a6d3f042314753f8234817ccec455eda0cf481b43b2eb3b5bd23378dbf1e7e989821c2e744"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-0466a5e95c5e0cb0a995b2e39a3b23e82042538c9412ec519ab3b4a6d3f042314753f8234817ccec455eda0cf481b43b2eb3b5bd23378dbf1e7e989821c2e744"' :
                                            'id="xs-components-links-module-CoreModule-0466a5e95c5e0cb0a995b2e39a3b23e82042538c9412ec519ab3b4a6d3f042314753f8234817ccec455eda0cf481b43b2eb3b5bd23378dbf1e7e989821c2e744"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-54f7aedef291f7d3b9a388b1e43671afed096812b6e50e14c23674c66938e7a345baaa2c78d32e6b2c84683829ccaf3036bdd27186a0f52ee4bb01ab3d60bd6d"' : 'data-bs-target="#xs-components-links-module-DashboardModule-54f7aedef291f7d3b9a388b1e43671afed096812b6e50e14c23674c66938e7a345baaa2c78d32e6b2c84683829ccaf3036bdd27186a0f52ee4bb01ab3d60bd6d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-54f7aedef291f7d3b9a388b1e43671afed096812b6e50e14c23674c66938e7a345baaa2c78d32e6b2c84683829ccaf3036bdd27186a0f52ee4bb01ab3d60bd6d"' :
                                            'id="xs-components-links-module-DashboardModule-54f7aedef291f7d3b9a388b1e43671afed096812b6e50e14c23674c66938e7a345baaa2c78d32e6b2c84683829ccaf3036bdd27186a0f52ee4bb01ab3d60bd6d"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesModule.html" data-type="entity-link" >HeroesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HeroesModule-5064d677d0ae712ca8f5e6ac206284c6d22312a691f948cfe39b9caf9a277638f8a48cad0d914f20730f110c32e1d121b69695735e6a092660c4738112861762"' : 'data-bs-target="#xs-components-links-module-HeroesModule-5064d677d0ae712ca8f5e6ac206284c6d22312a691f948cfe39b9caf9a277638f8a48cad0d914f20730f110c32e1d121b69695735e6a092660c4738112861762"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeroesModule-5064d677d0ae712ca8f5e6ac206284c6d22312a691f948cfe39b9caf9a277638f8a48cad0d914f20730f110c32e1d121b69695735e6a092660c4738112861762"' :
                                            'id="xs-components-links-module-HeroesModule-5064d677d0ae712ca8f5e6ac206284c6d22312a691f948cfe39b9caf9a277638f8a48cad0d914f20730f110c32e1d121b69695735e6a092660c4738112861762"' }>
                                            <li class="link">
                                                <a href="components/HeroDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeroesRoutingModule.html" data-type="entity-link" >HeroesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-4ea76d7bc990b11f5185d4e09e8b2f6cf32a7f284102f3f763e3288b248e5f480f90c0256d46772161e041f148ff9d34f8a0c8917f019c1d95bb88c5dfd37446"' : 'data-bs-target="#xs-components-links-module-SharedModule-4ea76d7bc990b11f5185d4e09e8b2f6cf32a7f284102f3f763e3288b248e5f480f90c0256d46772161e041f148ff9d34f8a0c8917f019c1d95bb88c5dfd37446"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4ea76d7bc990b11f5185d4e09e8b2f6cf32a7f284102f3f763e3288b248e5f480f90c0256d46772161e041f148ff9d34f8a0c8917f019c1d95bb88c5dfd37446"' :
                                            'id="xs-components-links-module-SharedModule-4ea76d7bc990b11f5185d4e09e8b2f6cf32a7f284102f3f763e3288b248e5f480f90c0256d46772161e041f148ff9d34f8a0c8917f019c1d95bb88c5dfd37446"' }>
                                            <li class="link">
                                                <a href="components/HeroSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroService.html" data-type="entity-link" >HeroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoadingInterceptor.html" data-type="entity-link" >LoadingInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});