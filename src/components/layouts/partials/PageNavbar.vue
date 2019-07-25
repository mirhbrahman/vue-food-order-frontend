<template>
  <nav class="navbar ">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="http://bulma.io"
      >
        <img
          src="http://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        >
      </a>

      <a
        class="navbar-item is-hidden-desktop"
        href="https://github.com/jgthms/bulma"
        target="_blank"
      >
        <span
          class="icon"
          style="color: #333;"
        >
          <i class="fa fa-github"></i>
        </span>
      </a>

      <a
        class="navbar-item is-hidden-desktop"
        href="https://twitter.com/jgthms"
        target="_blank"
      >
        <span
          class="icon"
          style="color: #55acee;"
        >
          <i class="fa fa-twitter"></i>
        </span>
      </a>

      <div
        class="navbar-burger burger"
        data-target="navMenubd-example"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="navMenubd-example"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a
            class="navbar-link  is-active is-primary"
            href="/documentation/overview/start/"
          >
            Docs
          </a>
          <div class="navbar-dropdown ">
            <a
              class="navbar-item "
              href="/documentation/overview/start/"
            >
              Overview
            </a>
            <a
              class="navbar-item "
              href="http://bulma.io/documentation/modifiers/syntax/"
            >
              Modifiers
            </a>
            <a
              class="navbar-item "
              href="http://bulma.io/documentation/columns/basics/"
            >
              Columns
            </a>
            <a
              class="navbar-item "
              href="http://bulma.io/documentation/layout/container/"
            >
              Layout
            </a>
            <a
              class="navbar-item "
              href="http://bulma.io/documentation/form/general/"
            >
              Form
            </a>
            <a
              class="navbar-item "
              href="http://bulma.io/documentation/elements/box/"
            >
              Elements
            </a>

            <a
              class="navbar-item is-active"
              href="http://bulma.io/documentation/components/breadcrumb/"
            >
              Components
            </a>

            <hr class="navbar-divider">
            <div class="navbar-item">
              <div>
                <p class="is-size-6-desktop">
                  <strong class="has-text-info">0.5.1</strong>
                </p>

                <small>
                  <a
                    class="bd-view-all-versions"
                    href="/versions"
                  >View all versions</a>
                </small>

              </div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable is-mega">
          <div class="navbar-link">
            Blog
          </div>
          <div
            id="blogDropdown"
            class="navbar-dropdown "
            data-style="width: 18rem;"
          >
            <div class="container is-fluid">
              <div class="columns">
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title has-text-primary">Sub Menu Title</h1>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                </div>
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">

                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                  <a
                    class="navbar-item "
                    href="/documentation/overview/start/"
                  >
                    Overview
                  </a>
                  <a
                    class="navbar-item "
                    href="http://bulma.io/documentation/modifiers/syntax/"
                  >
                    Modifiers
                  </a>
                  <a
                    class="navbar-item "
                    href="http://bulma.io/documentation/columns/basics/"
                  >
                    Columns
                  </a>
                </div>
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                  <a
                    class="navbar-item"
                    href="/2017/08/03/list-of-tags/"
                  >
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>

                </div>
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                  <a
                    class="navbar-item "
                    href="/documentation/overview/start/"
                  >
                    Overview
                  </a>
                  <a
                    class="navbar-item "
                    href="http://bulma.io/documentation/modifiers/syntax/"
                  >
                    Modifiers
                  </a>
                  <a
                    class="navbar-item "
                    href="http://bulma.io/documentation/columns/basics/"
                  >
                    Columns
                  </a>
                  <a
                    class="navbar-item "
                    href="http://bulma.io/documentation/layout/container/"
                  >
                    Layout
                  </a>
                </div>
              </div>
            </div>

            <hr class="navbar-divider">
            <div class="navbar-item">
              <div class="navbar-content">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <strong>Stay up to date!</strong>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <a
                        class="button bd-is-rss is-small"
                        href="http://bulma.io/atom.xml"
                      >
                        <span class="icon is-small">
                          <i class="fa fa-rss"></i>
                        </span>
                        <span>Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            More
          </div>
          <div
            id="moreDropdown"
            class="navbar-dropdown "
          >
            <a
              class="navbar-item "
              href="http://bulma.io/extensions/"
            >
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Extensions</strong>
                      <br>
                      <small>Side projects to enhance Bulma</small>
                    </p>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span class="icon has-text-info">
                      <i class="fa fa-plug"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <a
          class="navbar-item "
          href="http://bulma.io/expo/"
        >
          Test
        </a>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button is-primary is-outlined is-small"
                href=""
              >
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>
                <span>19</span>
              </a>
            </p>
          </div>
        </div>
        <a
          class="navbar-item"
          href=""
        >
          Login
        </a>
        <a
          class="navbar-item"
          href=""
        >
          Register
        </a>

      </div>
    </div>
  </nav>

</template>

<script>
export default {

}
</script>
