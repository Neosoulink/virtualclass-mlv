<template>
  <footer class="footer">
    <div :class="container ? 'container' : 'd-flex align-content-between justify-content-between px-4'">
      <nav>
        <ul>
          <li>
            <a href="https://github.com/Neosoulink">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="javascript:void(0)" target="_blank"
          >VirtualClass</a
        >, your secure virtual classor <i class="fa fa-star star"></i>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
	props:{
		container:  {
			type: Boolean,
			default: true,
		},
	}
};
</script>
<style></style>
