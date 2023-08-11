import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'productApi',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (build) => ({
		getProduct: build.query({
			query: () => 'products',
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Products', id })),
						{ type: 'Products', id: 'LIST' },
					]
					: [{ type: 'Products', id: 'LIST' }],
		}),
		addUser: build.mutation({
			query: (body) => ({
				url: 'register',
				method: 'POST',
				body,
			})
		}),
		signIn: build.mutation({
			query: (body) => ({
				url: 'login',
				method: 'POST',
				body,
			})
		}),
		addProducts: build.mutation({
			query: (body) => ({
				url: 'products',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		getFollovers: build.query({
			query: () => 'follovers',
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Follovers', id })),
						{ type: 'Follovers', id: 'FOLOVER' },
					]
					: [{ type: 'Follovers', id: 'FOLOVER' }],
		}),
		addFollovers: build.mutation({
			query: (body) => ({
				url: 'follovers',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Follovers', id: 'FOLOVER' }]
		}),
		deleteFollovers: build.mutation({
			query: (id) => ({
				url: `follovers/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Follovers', id: 'FOLOVER' }]
		}),
		deleteProduct: build.mutation({
			query: (id) => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		getProductId: build.query({
			query: (id) => ({
				url: `products/${localStorage.getItem('productId')}`,
			}),
		}),
		buyProduct: build.mutation({
			query: (id) => ({
				url: `Buy`,
				method: 'POST',
				body: id,
			}),
		}),
		getBuys: build.query({
			query: () => 'buy',
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Delbuy', id })),
						{ type: 'Delbuy', id: 'DELB' },
					]
					: [{ type: 'Delbuy', id: 'DELB' }],
		}),

		deleteBuy: build.mutation({
			query: (id) => ({
				url: `buy/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags:[{ type: 'Delbuy', id: 'DELB' }]
		}),
	})
	
})
export const { useGetProductQuery, useAddUserMutation, useSignInMutation, useAddProductsMutation, useGetFolloversQuery, useAddFolloversMutation, useDeleteFolloversMutation, useDeleteProductMutation, useGetProductIdQuery, useBuyProductMutation, useGetBuysQuery,useDeleteBuyMutation } = productApi