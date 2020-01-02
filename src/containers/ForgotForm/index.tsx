import { Container } from 'components'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, HelperText, TextInput } from 'react-native-paper'

type FormData = {
	email: string
}
interface IProps {
	loading?: boolean
	onSubmit: (form: FormData) => void
}

export const ForgotForm: React.FC<IProps> = ({
	onSubmit,

	loading,
}) => {
	const { t } = useTranslation()
	const [ Form, setForm ] = useState({
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

			<Button mode="contained" disabled={loading} loading={loading} onPress={submit}>
				{t('form.submit')}
			</Button>
		</Container>
	)
}
