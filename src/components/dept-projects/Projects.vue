<template>
  <DataTable
    v-model:filters="filters"
    :value="products"
    removableSort
    tableStyle="margin:19px min-width: 50rem"
    :globalFilterFields="['code', 'name', 'category', 'quantity']"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
  >
    <template #header>
      <div class="flex justify-end">
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
        </IconField>
      </div>
    </template>
    <Column field="code" header="Code" sortable style="width: 25%"></Column>
    <Column field="name" header="Name" sortable style="width: 25%"></Column>
    <Column field="category" header="Category" sortable style="width: 25%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
  </DataTable>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "@primevue/core/api";
import { ProductService } from "@/service/ProductService";

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data));
});

const products = ref();
</script>
