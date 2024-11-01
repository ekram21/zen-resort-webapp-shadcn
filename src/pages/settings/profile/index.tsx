import ProfileForm from './profile-form'
import ContentSection from '../components/content-section'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Account'
      desc='General Information'
    >
      <ProfileForm />
    </ContentSection>
  )
}
