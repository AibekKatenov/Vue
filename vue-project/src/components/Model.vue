<script>

</script>
<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[1, 1, 1]" />
    <TresScene>
            <TreshMesh>
                <TresBoxGeometry />
                <TresMeshBasicMaterial color="teal" />
            </TreshMesh>
    </TresScene> 
 </TresCanvas>
</template>