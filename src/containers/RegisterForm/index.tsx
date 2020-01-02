import { Container } from 'components'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { SocialIcon } from 'react-native-elements'
import { Button, HelperText, TextInput } from 'react-native-paper'

type FormData = {
	firstName: string
	lastName: string
	email: string
	password: string
	phone: string
}
interface IProps {
	loading?: boolean
	onSubmit: (form: FormData) => void
	onFacebook?: () => void
}

export const RegisterForm: React.FC<IProps> = ({ onSubmit, onFacebook, loading }) => {
	const { t } = useTranslation()
	const [ Form, setForm ] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		password: '',
	})

	const { register, handleSubmit, errors, setValue } = useForm<FormData>()

	const submit: any = handleSubmit((form: FormData) => {
		onSubmit(form)
	})

	const inputChange = (field: any) => (value: string) => {
		setForm({
			...Form,
			[field]: value,
		})
		setValue(field, value, true)
	}

	return (
		<Container>
			<TextInput
				//@ts-ignore
				ref={register(
					{ name: 'firstName' },
					{
						minLength: 5,
						required: true,
					},
				)}
				mode="outlined"
				label={t('form.firstName')}
				disabled={loading}
				value={Form.firstName}
				error={!!errors.firstName}
				onChangeText={inputChange('firstName')}
			/>
			<HelperText type="error" visible={!!errors.firstName}>
				{t('form.required')}
			</HelperText>

			<TextInput
				//@ts-ignore
				ref={register(
					{ name: 'lastName' },
					{
						minLength: 5,
						required: true,
					},
				)}
				mode="outlined"
				label={t('form.lastName')}
				disabled={loading}
				value={Form.lastName}
				error={!!errors.lastName}
				onChangeText={inputChange('lastName')}
			/>
			<HelperText type="error" visible={!!errors.lastName}>
				{t('form.required')}
			</HelperText>

			<TextInput
				//@ts-ignore
				ref={register(
					{ name: 'phone' },
					{
						minLength: 5,
						required: true,
					},
				)}
				mode="outlined"
				label={t('form.phone')}
				disabled={loading}
				value={Form.phone}
				error={!!errors.phone}
				onChangeText={inputChange('phone')}
			/>
			<HelperText type="error" visible={!!errors.phone}>
				{t('form.required')}
			</HelperText>

			<TextInput
				//@ts-ignore
				ref={register(
					{ name: 'email' },
					{
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'invalid email address',
						},
						required: true,
					},
				)}
				mode="outlined"
				label={t('form.email')}
				disabled={loading}
				value={Form.email}
				error={!!errors.email}
				onChangeText={inputChange('email')}
			/>
			<HelperText type="error" visible={!!errors.email}>
				{t('form.emailRequired')}
			</HelperText>

			<TextInput
				//@ts-ignore
				ref={register(
					{ name: 'password' },
					{
						minLength: 5,
						required: true,
					},
				)}
				mode="outlined"
				label={t('form.password')}
				value={Form.password}
				disabled={loading}
				error={!!errors.password}
				onChangeText={inputChange('password')}
			/>
			<HelperText type="error" visible={!!errors.password}>
				{t('form.required')}
			</HelperText>

			<Button mode="contained" disabled={loading} loading={loading} onPress={submit}>
				{t('form.submit')}
			</Button>

			{onFacebook && (
				<SocialIcon disabled={loading} button title={t('form.facebook')} type="facebook" onPress={onFacebook} />
			)}
		</Container>
	)
}
